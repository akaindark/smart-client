import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  private _types: any;
  private _brands: any;
  private _devices: any;
  constructor() {
    this._types = [
      { id: 1, name: "Telefoane" },
      { id: 2, name: "Laptopuri" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 17000,
        img: "https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 17000,
        img: "https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 17000,
        img: "https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 17000,
        img: "https://www.smart.md/image/cache/data/results-photos/smartgsm/iphone-13-dual-sim-esim-128gb-5g-negru-midnight-6gb-ram_10074484_3_1631707823-536x536.jpg",
      },
    ]
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

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
