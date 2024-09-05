import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const appUrl = process.env.VITE_SERVER_ENDPOINT
// export const fileUrl = import.meta.env.VITE_SERVER_FILE_ENDPOINT
