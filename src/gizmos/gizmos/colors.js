/**
 * A collection of commonly used colors in gizmos.
 * @module
 */

import { Vec3 } from "../../math/Vec3.js";

export function createWhiteColor() {
	return new Vec3(1, 1, 1);
}

export function createRedColor() {
	return new Vec3(1, 0.15, 0.15);
}

export function createGreenColor() {
	return new Vec3(0.2, 1, 0.2);
}

export function createBlueColor() {
	return new Vec3(0.3, 0.3, 1);
}

export function createHoverColor() {
	return new Vec3(1, 0.7, 0);
}
