"use server";
import { random } from "radash";

export async function getRandomValue() {
  return random(0, 100);
}
