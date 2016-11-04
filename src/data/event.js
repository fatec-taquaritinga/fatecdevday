const target = new Date('2016-11-05T07:30:00-02:00')
const now = new Date()
const today = now.getFullYear() === target.getFullYear() && now.getMonth() === target.getMonth() && now.getDate() === target.getDate()

export default {
  name: 'Fatec Dev Day',
  fullName: 'Fatec Dev Day 2016',
  date: target,
  soldOut: now - target < 0 || today || target - now < 432000000,
  when: {
    past: now - target > 0 && !today,
    present: today,
    future: now - target < 0 && !today
  },
  team: [
    'Jederson Zuchi',
    'Erick Petrucelli',
    'Fabio Takeda',
    'Patricia Lourençano',
    'Luciano Barros',
    'Felipe Espírito Santo',
    'Gustavo Del Vechio'
  ]
}
