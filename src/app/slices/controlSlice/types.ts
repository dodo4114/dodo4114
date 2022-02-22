/* --- STATE --- */
export interface ControlState {
  detailModalState: ModalState;
}

interface ModalState {
  isOpen: boolean;
  data: ModalData;
}

interface ModalData {
  title: string;
  body: string;
  url?: string;
}
