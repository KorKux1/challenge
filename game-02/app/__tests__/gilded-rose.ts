import GildedRose from '../gilded-rose';
import Item from '../item';

describe('reduce and increase products quality without reaching the limits and conditions established', () => {

  let items;

  let gildedRose;

  beforeEach(() => {
    items = [
      new Item('Aged Brie', 200, 30),
      new Item('Sulfuras, Hand of Ragnaros', 1000, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 30, 20),
      new Item('Conjured', 20, 30),
      new Item('Other', 40, 40),
    ]

    gildedRose = new GildedRose(items);
  });
  
  it("should to change the sellIn and quality without reaching limit values or special changes, simulate 5 days", () => {

      // Simulate 5 days
      for (let index = 0; index < 5; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(195);
      expect(gildedRose.items[0].quality).toBe(35);

      expect(gildedRose.items[1].sellIn).toBe(1000);
      expect(gildedRose.items[1].quality).toBe(80);

      expect(gildedRose.items[2].sellIn).toBe(25);
      expect(gildedRose.items[2].quality).toBe(25);

      expect(gildedRose.items[3].sellIn).toBe(15);
      expect(gildedRose.items[3].quality).toBe(20);

      expect(gildedRose.items[4].sellIn).toBe(35);
      expect(gildedRose.items[4].quality).toBe(35);
  });

  it("should to change the sellIn and quality without reaching limit values or special changes, simulate 10 days", () => {

      // Simulate 10 days
      for (let index = 0; index < 10; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(190);
      expect(gildedRose.items[0].quality).toBe(40);

      expect(gildedRose.items[1].sellIn).toBe(1000);
      expect(gildedRose.items[1].quality).toBe(80);

      expect(gildedRose.items[2].sellIn).toBe(20);
      expect(gildedRose.items[2].quality).toBe(30);

      expect(gildedRose.items[3].sellIn).toBe(10);
      expect(gildedRose.items[3].quality).toBe(10);

      expect(gildedRose.items[4].sellIn).toBe(30);
      expect(gildedRose.items[4].quality).toBe(30);
  });
})

describe('reduce products quality for the lower bounds', () => {
  
  it("should be kept quality  above zero when quality goes down to zero", () => {
      const items = [
        new Item('Conjured', 3, 15),
        new Item('Other', 3, 2),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 10 days
      for (let index = 0; index < 10; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(-7);
      expect(gildedRose.items[0].quality).toBe(0);

      expect(gildedRose.items[1].sellIn).toBe(-7);
      expect(gildedRose.items[1].quality).toBe(0);
  });

  it("should reduce quality twice as fast once the sell-by date has passed", () => {
      const items = [
        new Item('Conjured', 0, 30),
        new Item('Other', 0, 30),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 5 days
      for (let index = 0; index < 5; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(-5);
      expect(gildedRose.items[0].quality).toBe(10);

      expect(gildedRose.items[1].sellIn).toBe(-5);
      expect(gildedRose.items[1].quality).toBe(20);
  });
})


describe('increase products quality for the hight bounds', () => {

  it("should reduce quality twice as fast once the sell-by date has passed", () => {
      const items = [
        new Item('Conjured', 0, 30),
        new Item('Other', 0, 30),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 5 days
      for (let index = 0; index < 5; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(-5);
      expect(gildedRose.items[0].quality).toBe(10);

      expect(gildedRose.items[1].sellIn).toBe(-5);
      expect(gildedRose.items[1].quality).toBe(20);
  });
  
  it("should the quality of the products be maintained at 50 when quality of 50 is reached", () => {
      const items = [
        new Item('Aged Brie', 10, 50),
        new Item('Backstage passes to a TAFKAL80ETC concert', 20, 50),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 5 days
      for (let index = 0; index < 5; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(5);
      expect(gildedRose.items[0].quality).toBe(50);

      expect(gildedRose.items[1].sellIn).toBe(15);
      expect(gildedRose.items[1].quality).toBe(50);

      expect(gildedRose.items[2].sellIn).toBe(5);
      expect(gildedRose.items[2].quality).toBe(50);

      expect(gildedRose.items[3].sellIn).toBe(0);
      expect(gildedRose.items[3].quality).toBe(50);
  });
})

describe('changes in quality for products with special behaviors', () => {

  it("should Sulfuras item  remain unchanged, quality should always be 80", () => {
      const items = [
        new Item('Sulfuras, Hand of Ragnaros', 1000, 80),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 5 days
      for (let index = 0; index < 100; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(1000);
      expect(gildedRose.items[0].quality).toBe(80);
  });
  
  it("should the quality of the Backstage passes change as the day of the concert approaches", () => {

      const items = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 5 days
      for (let index = 0; index < 5; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(15);
      expect(gildedRose.items[0].quality).toBe(25);

      expect(gildedRose.items[1].sellIn).toBe(5);
      expect(gildedRose.items[1].quality).toBe(30);

      expect(gildedRose.items[2].sellIn).toBe(0);
      expect(gildedRose.items[2].quality).toBe(35);

      expect(gildedRose.items[3].sellIn).toBe(-1);
      expect(gildedRose.items[3].quality).toBe(0);
  });

  it("should change the price of the Backstage passes when its sellIn covers all the increase values", () => {

      const items = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 20, 5),
      ]

      const gildedRose = new GildedRose(items);

      // Simulate 20 days
      for (let index = 0; index < 20; index++) {
        gildedRose.updateQuality();
      }

      expect(gildedRose.items[0].sellIn).toBe(0);
      expect(gildedRose.items[0].quality).toBe(40);
  });
})