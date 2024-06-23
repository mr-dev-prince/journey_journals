import { create } from "zustand";

export const useCustomModal = create((set) => ({
  isModalOpen: false,
  setModalOpne: (isModalOpen) => set({ isModalOpen }),
}));
