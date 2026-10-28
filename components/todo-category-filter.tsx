"use client";

import {
  CATEGORY_FILTERS,
  CATEGORY_META,
  type CategoryFilter,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { SegmentedControl } from "@/components/segmented-control";

interface TodoCategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

// 각 카테고리 옵션 앞에 목록 뱃지와 같은 색의 점을 붙인다.
const OPTIONS = CATEGORY_FILTERS.map((item) => ({
  ...item,
  icon:
    item.value === "all" ? undefined : (
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          CATEGORY_META[item.value].dotClass
        )}
      />
    ),
}));

export function TodoCategoryFilter({
  value,
  onChange,
}: TodoCategoryFilterProps) {
  return (
    <SegmentedControl
      label="카테고리 필터"
      options={OPTIONS}
      value={value}
      onChange={onChange}
    />
  );
}
