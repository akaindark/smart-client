import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  private _types: any;
  private _brands: any;
  private _devices: any;
  constructor() {
    this._types = [
      { id: 1, name: 'Smartphone' },
      { id: 2, name: 'Laptopuri' },
      { id: 3, name: 'Dulapuri' },
      { id: 4, name: 'Smart Watch' },
      { id: 5, name: 'Generatoare' },
      { id: 6, name: 'Electrocasnice' },
      { id: 7, name: 'Mobilier' },
      { id: 8, name: 'Casa si Gradina' },
      { id: 9, name: 'Auto' },
      { id: 10, name: 'Sport' },
      { id: 11, name: 'Jucarii' },
      { id: 12, name: 'Convectoare' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Xiaomi' },
      { id: 4, name: 'Huawei' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 17000,
        img: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg',
      },
      {
        id: 2,
        name: 'Samsung a51',
        price: 10000,
        img: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg',
      },
      {
        id: 3,
        name: 'Iphone 10 max',
        price: 15000,
        img: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg',
      },
      {
        id: 4,
        name: 'Huawei p40',
        price: 12000,
        img: 'https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg',
      },
    ];
    // @ts-ignore
    this._selectedType = {}
      // @ts-ignore
      .makeAutoObservable(this);
  }
  setTypes(types: any) {
    this._types = types;
  }
  setBrands(brands: any) {
    this._brands = brands;
  }
  setDevices(devices: any) {
    this._devices = devices;
  }
  setSelectedType(type: any) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
}
