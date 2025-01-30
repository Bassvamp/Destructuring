export default function specialAttack(obj) {
  const { special } = obj;
  for (let i = 0; i < special.length; i++) {
    if (!special[i].description) {
      special[i].description = "Описание недоступно";
    }
  }
}
