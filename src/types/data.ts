import { Building, UnifiedItem, Unit } from "../../data/.scripts/lib/types/units";
export type { Item, Unit, Building, UnifiedItem, Upgrade, Technology, Modifier } from "../../data/.scripts/lib/types/units";
export type { civAbbr, civConfig } from "../../../data/.scripts/lib/types/civs";

export type GroupedUnits = Record<"infantry" | "cavalry" | "siege" | "ships" | "workers", UnifiedItem<Unit>[]>;
export type GroupedBuildings = Record<"economy" | "military" | "religious" | "defensive" | "technology" | "landmarks" | "wonders", UnifiedItem<Building>[]>;
