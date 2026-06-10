import type { Column, ColumnDef, SortingState } from '@tanstack/react-table';
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { MessageDescriptor } from 'react-intl';
import { useIntl } from 'react-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Procedure, Region } from 'src/data';
import { getDoseLevel } from 'src/utils/dose-level';

import { DoseLevelBadge } from '../dose-level-badge/DoseLevelBadge';
import { i18n } from './RegionDoseTable.i18n';
import { useStyles } from './RegionDoseTable.styles';

type RegionDoseTableProps = {
    region: Region;
    procedures: Procedure[];
};

// Shared widths keep the columns aligned across every region table on the page.
const COLUMN_WIDTHS: Record<string, string> = {
    procedure: 'w-[44%]',
    aed: 'w-[26%]',
    background: 'w-[30%]',
};

type SortableHeaderProps = {
    column: Column<Procedure>;
    label: MessageDescriptor;
};

const SortableHeader = ({ column, label }: SortableHeaderProps) => {
    const intl = useIntl();
    const sortDirection = column.getIsSorted();

    return (
        <Button
            variant="ghost"
            size="sm"
            className="-ml-2.5"
            onClick={() => column.toggleSorting(sortDirection === 'asc')}
            aria-label={intl.formatMessage(i18n.sortButtonLabel, { column: intl.formatMessage(label) })}
        >
            {intl.formatMessage(label)}
            {sortDirection === 'asc' ? <ArrowUp /> : sortDirection === 'desc' ? <ArrowDown /> : <ArrowUpDown />}
        </Button>
    );
};

export const RegionDoseTable = ({ region, procedures }: RegionDoseTableProps) => {
    const intl = useIntl();
    const { classes } = useStyles();
    const [sorting, setSorting] = useState<SortingState>([{ id: 'aed', desc: true }]);

    const columns = useMemo<ColumnDef<Procedure>[]>(
        () => [
            {
                id: 'procedure',
                accessorKey: 'name',
                header: ({ column }) => <SortableHeader column={column} label={i18n.procedureColumn} />,
                cell: ({ row }) => <span className="whitespace-normal font-medium">{row.original.name}</span>,
            },
            {
                id: 'aed',
                accessorFn: (procedure) => procedure.aed.value,
                header: ({ column }) => <SortableHeader column={column} label={i18n.aedColumn} />,
                cell: ({ row }) => (
                    <span className={classes.aedCell}>
                        <span className="tabular-nums">{row.original.aed.display}</span>
                        <DoseLevelBadge level={getDoseLevel(row.original.aed.value)} />
                    </span>
                ),
            },
            {
                id: 'background',
                // The comparison column is a human-readable rendering of the dose, so it sorts by dose value.
                accessorFn: (procedure) => procedure.aed.value,
                header: ({ column }) => <SortableHeader column={column} label={i18n.backgroundColumn} />,
                cell: ({ row }) => row.original.comparableBackground,
            },
        ],
        [classes.aedCell],
    );

    const table = useReactTable({
        data: procedures,
        columns,
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <Card id={region.id} className="gap-3 py-4">
            <CardHeader className="px-4">
                <div className={classes.header}>
                    <CardTitle className="text-base">{region.name}</CardTitle>
                    <Badge variant="secondary">
                        {intl.formatMessage(i18n.procedureCount, { count: procedures.length })}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <Table className="table-fixed min-w-[560px]">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id} className={COLUMN_WIDTHS[header.column.id]}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
