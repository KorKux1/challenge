import Item from "./item";
import { qualityValues } from './quality-config';

/**
* Class that represents the product management system
*/
class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    /** 
    * Update items quality by the sellIn date and the item type (item.name)
    * @return {Array<Item>} items with quality updated.
    */
    updateQuality() {
        for (const item of this.items) {
            if (item.name !== "Sulfuras, Hand of Ragnaros") {
                this.reduceItemSellIn(item);
            }
            if(item.name === 'Backstage passes to a TAFKAL80ETC concert'){
                this.updateBackstagePassesQuality(item);
            } else {
                this.updateItemQuality(item);
            }
        }
        return this.items;
    }

    /** 
    * Reduce item sellIn value.
    * @param {Item} item - item to reduce sellIn.
    * @return {undefined}
    */
    reduceItemSellIn(item: Item) {
        item.sellIn -= 1
    }

    /** 
    * Update item quality given specific conditions.
    * @param {Item} item - item to reduce quality.
    * @return {undefined}
    */
    updateItemQuality(item: Item) {
        let qualityValue =  qualityValues[item.name] ? qualityValues[item.name] : -1;

        if(item.sellIn < 0 && qualityValue < 0) {
            qualityValue = qualityValue * 2;
        }
        
        if (item.quality + qualityValue >= 0 && item.quality + qualityValue <= 50) {
            item.quality += qualityValue
        } else if (item.quality + qualityValue < 0) {
            item.quality = 0
        } else if(item.name === 'Sulfuras, Hand of Ragnaros') {
            item.quality = 80 // Just to be safe
        }
        else {
            item.quality = 50
        }
    }

    /** 
    * Update BackstagePasses item quality given specific conditions.
    * @param {Item} item - item to reduce quality.
    * @return {undefined}
    */
    updateBackstagePassesQuality(item: Item) {
        let itemQuality = 0;

        if (item.sellIn < 0) {
            item.quality = 0;
            return;
        }

        if(item.sellIn >= 10) {
            itemQuality = 1
        } else if(item.sellIn >= 5) { 
            itemQuality = 2
        } else if(item.sellIn >= 0) {
            itemQuality = 3
        }

        if(item.quality + itemQuality <= 50) {
            item.quality += itemQuality
        } else {
            item.quality = 50
        }
    }

    
}
export default GildedRose;
