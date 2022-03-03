import Item from "./item";
import { qualityValues } from './quality-config';

/**
* Brief description of the class here.
*/
class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

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

    reduceItemSellIn(item: Item) {
        item.sellIn -= 1
    }

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
