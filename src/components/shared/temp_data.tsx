const menus = [
  { id: '1',  type: 'Fruits',         title: 'Apple',   cnt: 3, expire: 0 ,  day: '23', when_added:'2', month: 'May', time: '13:30', msel: false, image: require('../../../assets/images/apple.png') },
  { id: '2',  type: 'Beverages',      title: 'Pepsi',   cnt: 4, expire: 4 ,  day: '3',  when_added:'0', month: 'May', time: '15:30', msel: false, image: require('../../../assets/images/dose.png') },
  { id: '3',  type: 'Others',         title: 'Sauce',   cnt: 1, expire: 3 ,  day: '21', when_added:'1', month: 'May', time: '14:30', msel: false, image: require('../../../assets/images/sauces.png') },
  { id: '4',  type: 'Fruits',         title: 'Tomato',  cnt: 2, expire: -1 , day: '13', when_added:'4', month: 'May', time: '11:30', msel: false, image: require('../../../assets/images/tomato.png') },
  { id: '5',  type: 'Cereal Food',    title: 'Rice',    cnt: 1, expire: 2 ,  day: '2',  when_added:'0', month: 'May', time: '13:30', msel: false, image: require('../../../assets/images/rice.png') },
  { id: '6',  type: 'Vegetables',     title: 'Cauli-Flower',  cnt: 5, expire: 6 ,  day: '6',  when_added:'1', month: 'May', time: '12:30', msel: false, image: require('../../../assets/images/cauliflower.png') },
  { id: '7',  type: 'Fruits',         title: 'Papaye',  cnt: 1, expire: 7 ,  day: '19', when_added:'1', month: 'May', time: '11:30', msel: false, image: require('../../../assets/images/papaya.png') },
  { id: '8',  type: 'Fruits',         title: 'Kivi',    cnt: 3, expire: 3 ,  day: '16', when_added:'0', month: 'May', time: '13:30', msel: false, image: require('../../../assets/images/kiwi.png') },
  { id: '9',  type: 'Meat & Chicken', title: 'Chicken', cnt: 4, expire:-2 ,  day: '13', when_added:'2', month: 'May', time: '5:30',  msel: false, image: require('../../../assets/images/chicken1.png') },
  { id: '10', type: 'Fish & Sea Food',title: 'Fish',    cnt: 1, expire: 1 ,  day: '15', when_added:'3', month: 'May', time: '19:30', msel: false, image: require('../../../assets/images/fish2.png') },
  { id: '11', type: 'Fruits',         title: 'Grapes',  cnt: 2, expire: 1 ,  day: '24', when_added:'0', month: 'May', time: '17:30', msel: false, image: require('../../../assets/images/grape.png') },
  { id: '12', type: 'Vegetables',     title: 'Carrot',  cnt: 1, expire: -3 , day: '6',  when_added:'5', month: 'May', time: '14:30', msel: false, image: require('../../../assets/images/carrot.png') },
  { id: '13', type: 'Vegetables',     title: 'Potato',  cnt: 5, expire: 2 ,  day: '8',  when_added:'0', month: 'May', time: '13:30', msel: false, image: require('../../../assets/images/potato.png') },
  { id: '14', type: 'Dairy & Eggs',   title: 'Eggs',    cnt: 1, expire:7,    day: '4',  when_added:'2', month: 'May', time: '8:30',  msel: false, image: require('../../../assets/images/egg.png') },
]

export default menus;