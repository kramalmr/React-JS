import { create } from "zustand";

// SOAL 1

const useStore = create((set) => ({
  costumerCount: 0,
  increment: () => set((state) => ({ costumerCount: state.costumerCount + 1 })),
  decrement: () =>
    set((state) => ({
      costumerCount: state.costumerCount !== 0 ? state.costumerCount - 1 : 0,
    })),
}));

const CostumerCounter = () => {
  const { costumerCount, increment, decrement } = useStore();
  return (
    <div>
      <h2>Jumlah Pelanggan Saat ini: {costumerCount}</h2>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
    </div>
  );
};

// SOAL 2

const useList = create((set) => ({
  list: [],
  add: (item) => set((state) => ({ list: [...state.list, item] })),
  remove: (index) =>
    set((state) => ({ list: state.list.filter((_, i) => i !== index) })),
}));

const List = () => {
  const { list, add, remove } = useList();
  return (
    <div>
      <button onClick={() => add(prompt("Masukkan item baru:"))}>
        Tambah Item
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <br />
            item ke - {index}
            <br />
            <button onClick={() => remove(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CostumerCounter, List };
