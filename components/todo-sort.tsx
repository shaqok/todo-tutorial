"use client";

import { SORT_OPTIONS, type SortBy } from "@/lib/types";
import { SegmentedControl } from "@/components/segmented-control";

interface TodoSortProps {
  value: SortBy;
  onChange: (value: SortBy) => void;
}

export function TodoSort({ value, onChange }: TodoSortProps) {
  return (
    <SegmentedControl
      label="정렬"
      options={SORT_OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
}
