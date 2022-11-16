import macchiato from '~/assets/cofee-macchiato.png'
import arabe from '~/assets/coffee-arabe.png'
import cafeComLeite from '~/assets/coffee-cafe-com-leite.png'
import capuccino from '~/assets/coffee-capuccino.png'
import chocolateQuente from '~/assets/coffee-chocolate-quente.png'
import cubano from '~/assets/coffee-cubano.png'
import expressoAmericano from '~/assets/coffee-expresso-americano.png'
import expressoCremoso from '~/assets/coffee-expresso-cremoso.png'
import expressoGelado from '~/assets/coffee-expresso-gelado.png'
import expressoTradicional from '~/assets/coffee-expresso-tradicional.png'
import havaiano from '~/assets/coffee-havaiano.png'
import irlandes from '~/assets/coffee-irlandes.png'
import latte from '~/assets/coffee-latte.png'
import mocaccino from '~/assets/coffee-mocaccino.png'

export const Coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    price: 5.99,
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoTradicional
  },
  {
    id: 2,
    name: 'Expresso Americano',
    price: 6.99,
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: expressoAmericano
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    price: 7.25,
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    price: 8.5,
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado
  },
  {
    id: 5,
    name: 'Café com Leite',
    price: 6.99,
    tags: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite
  },
  {
    id: 6,
    name: 'Latte',
    price: 7.99,
    tags: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte
  },
  {
    id: 7,
    name: 'Capuccino',
    price: 7.99,
    tags: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino
  },
  {
    id: 8,
    name: 'Macchiato',
    price: 7.99,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato
  },
  {
    id: 9,
    name: 'Mocaccino',
    price: 8.99,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    price: 8.99,
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente
  },
  {
    id: 11,
    name: 'Cubano',
    price: 12.99,
    tags: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano
  },
  {
    id: 12,
    name: 'Havaiano',
    price: 11.99,
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano
  },
  {
    id: 13,
    name: 'Árabe',
    price: 14.79,
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe
  },
  {
    id: 14,
    name: 'Irlandês',
    price: 15.99,
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes
  }
]
