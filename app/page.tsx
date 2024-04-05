import SelectionCard from "@/app/ui/selectionCard";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <SelectionCard options={[{id: "1", name:"Ingenieria"}]} isMultiple={false} title="Seleccione programa" className={styles.card} />
      <SelectionCard options={[{id: "1", name:"Ingenieria"}]} isMultiple={false} title="Seleccione materias" className={styles.card} />
      <SelectionCard options={[{id: "1", name:"Ingenieria"}]} isMultiple={false} title="Seleccione profesor" className={styles.card }/>
    </main>
  );
}
