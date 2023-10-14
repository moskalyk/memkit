import { ethers } from 'ethers'
import fs from 'fs';

const library = {
      0: '🃟',
      1: '⚚',
      2: '♕',
      3: '⚘',
      4: '♖',
      5: '♔',
      6: '☂',
      7: '♘',
      8: '☮',
      9: '☯',
      10: '☸',
      11: '⚖',
      12: '♱',
      13: '☠',
      14: '♻',
      15: '☢',
      16: '☖',
      17: '★',
      18: '☽',
      19: '☼',
      20: '⚱',
      21: '⚬',
      22: '∅',
      23: 'RED',
      24: 'ORANGE',
      25: 'YELLOW',
      26: 'GREEN',
      27: 'CYAN',
      28: '◨',
      29: '❍',
      30: '☉',
      31: '☿',
      32: '♀',
      33: '♁',
      34: '♂',
      35: '⚳',
      36: '♃',
      37: '♄',
      38: '♅',
      39: '♆',
      40: '♇',
      41: '⚀',
      42: 'Birch 𐂷 BEITH',
      43: 'Rowan 𐂷 LUIS',
      44: 'Alder 𐂷 FEARN',
      45: 'Willow 𐂷 SAILLE',
      46: 'Ash 𐂷 NUIN',
      47: 'Hawthon 𐂷 HUATHE',
      48: 'Oak 𐂷 DUIR',
      49: 'Holly 𐂷 TINNE',
      50: 'Hazel 𐂷 COLL',
      51: 'Apple 𐂷 QUERT',
      52: 'Vine 𐂷 MUIN',
      53: 'Ivy 𐂷 GORT',
      54: 'Reed 𐂷 NGETAL',
      55: 'Blackthorn 𐂷 STRAIF',
      56: 'Elder 𐂷 RUIS',
      57: 'Silver Fir 𐂷 AILIM',
      58: 'Furze 𐂷 OHN',
      59: 'Heather 𐂷 UR',
      60: 'Poplar 𐂷 EADHA',
      61: 'Yew 𐂷 IOHO',
      62: 'The Grove 𐂷 KOAD',
      63: 'Spindle 𐂷 OIR',
      64: 'Honeysuckle 𐂷 UNILEAND',
      65: 'Beech 𐂷 PHAGOS',
      66: 'The Sea 𐂷 MOR',
      67: '⚁',
      68: 'The Self ᛗ MANNAZ',
      69: 'Partnership ᚷ GEBO',
      70: 'Signals ᚫ ANSUZ',
      71: 'Seperation ᛟ OTHILA',
      72: 'Strength ᚢ URUZ',
      73: 'Initiatian ᛈ PERTH',
      74: 'Constraint ᚾ NAUTHIZ',
      75: 'Fertility ᛝ INGUZ',
      76: 'Defense ᛇ EIHWAZ',
      77: 'Protection ᛉ ALGIZ',
      78: 'Posessions ᛓ FEHU',
      79: 'Joy ᚹ WUNJO',
      80: 'Harvest ᛃ JERA',
      81: 'Opening ᚲ KANO',
      82: 'Warrior ᛏ TEIWAZ',
      83: 'Growth ᛒ BERKANA',
      84: 'Movement ᛖ EHWAZ',
      85: 'Flow ᛐ LAGUZ',
      86: 'Disruption ᚺ HAGALAZ',
      87: 'Journey ᚱ RAIDO',
      88: 'Gateway ᚦ THURISAZ',
      89: 'Breakthrough ᛞ DAGAZ',
      90: 'Standstill ᛁ ISA',
      91: 'Wholeness ᛲ SOWELU',
      92: 'Unknowable  ODIN',
      93: '⚂',
      94: '🜁',
      95: '🜂',
      96: '🜃',
      97: '🜄',
      98: '⚃',
      99: '䷀',
      100: '䷁',
      101: '䷂',
      102: '䷃',
      103: '䷄',
      104: '䷅',
      105: '䷆',
      106: '䷇',
      107: '䷈',
      108: '䷉',
      109: '䷊',
      110: '䷋',
      111: '䷌',
      112: '䷍',
      113: '䷎',
      114: '䷏',
      115: '䷐',
      116: '䷑',
      117: '䷒',
      118: '䷓',
      119: '䷔',
      120: '䷕',
      121: '䷖',
      122: '䷗',
      123: '䷘', // 25
      124: '䷙',
      125: '䷚',
      126: '䷛',
      127: '䷜',
      128: '䷝',
      129: '䷞',
      130: '䷟',
      131: '䷠',
      132: '䷡',
      133: '䷢',
      134: '䷣',
      135: '䷤',
      136: '䷥',
      137: '䷦',
      138: '䷧', // 40
      139: '䷨',
      140: '䷩',
      141: '䷪',
      142: '䷫',
      143: '䷬',
      144: '䷭',
      145: '䷮',
      146: '䷯',
      147: '䷰',
      148: '䷱', // 50
      149: '䷲',
      150: '䷳',
      151: '䷴',
      152: '䷵',
      153: '䷶',
      154: '䷷',
      155: '䷸',
      156: '䷹', /// 58
      157: '䷺',
      158: '䷻',
      159: '䷼',
      160: '䷽',
      161: '䷾',
      162: '䷿',
      163: '¤',
      164: '🃕',
      165: '🂢',
      166: '🃉',
      167: '🂾',
      168: '🃃',
      169: '🂣',
      170: '🃋',
      171: '🂶',
      172: '🃍',
      173: '🂮',
      174: '🃞',
      175: '🂪',
      176: 'MOONSTONE',
      177: 'LAPIS_LAZULI',
      178: 'FLOWER_AGATE',
      179: 'MOSS_AGATE',
      180: 'SHAKTI',
      181: 'SUNSTONE',
      182: 'HEMATITE',
      183: 'AQUAMARINE',
      184: 'MALACHITE',
      185: 'ARAGONITE',
      186: 'BLACK_TOURMALINE',
      187: 'TOURQUISE',
      188: 'CALCITE',
      189: 'ROSE_QUARTZ',
      190: 'FLOURITE',
      191: 'PINK_AMETHYST',
      192: 'SMOKY_AMAZONITE',
      193: 'CITRINE',
      194: 'PEACH_SELENITE',
      195: 'SUPER_SEVEN',
      196: 'LABRADORITE',
      197: 'LARIMAR',
      198: 'LACE_AGATE',
      199: 'PYRITE',
      200: 'RED_JASPER',
      201: 'APOPHYLLITE',
      202: 'OPAL',
      203: 'EMERALD',
      204: 'HERKIMER_DIAMOND',
      205: 'AZURITE',
      206: 'AMMONITE',
      207: 'DESERT_JASPER',
      208: 'SPIRIT_QUARTZ',
      209: '⚄',
      210: '☌',
      211: '⚯',
      212: '□',
      213: '♈︎',
      214: '⚹',
      215: '⚯',
      216: '□',
      217: 'WOOD',
      218: 'METAL',
      219: '⇠',
      220: '⇡',
      221: '⇢',
      222: '⇣',
      223: '꩜',
      224: '❀',
      225: '𑗘',
      226: '♡',
      227: '▲',
      228: 'FRIDAY',
      229: '⚅',
      230: 'WOLF',
      231: 'CAT',
      232: 'ROOSTER',
      233: 'COW',
      234: 'BUFFALO',
      235: 'SPIDER',
      236: 'HORSE',
      237: 'SNAKE',
      238: 'FISH',
      239: 'FOX',
      240: 'BAT',
      241: 'MONKEY',
      242: 'TURTLE',
      243: 'BIRD',
      244: 'GOAT',
      245: 'MALKUTH',
      246: 'YESOD',
      247: 'HOD',
      248: 'NETZACH',
      249: 'TIPARETH',
      250: 'GEBURH',
      251: 'CHESED',
      252: 'DAATH',
      253: 'BINAH',
      254: 'CHOKMAH',
      255: 'KETER'
}

const networks = [ 
    'mainnet', 
    'polygon', 
    'polygon-zkevm', 
    'arbitrum', 
    'arbitrum-nova', 
    'optimism', 
    'bsc', 
    'avalanche', 
    'base', 
    'goerli', 
    'sepolia', 
    'mumbai', 
    'arbitrum-goerli', 
    'base-goerli', 
    'bsc-testnet'
]

const crates = [
    'air-interpreter-fs',
    'async-unlock',
    'cid-utils',
    'config-utils',
    'connected-client',
    'control-macro',
    'created-swarm',
    'fs-utils',
    'health',
    'ivalue-utils',
    'json-utils',
    'kademlia',
    'key-manager',
    'libp2p',
    'local-vm',
    'log-utils',
    'now-millis',
    'nox-tests',
    'particle-args',
    'peer-metrics',
    'server-config',
    'service-modules',
    'spell-event-bus',
    'spell-service-api',
    'subnet-resolver',
    'system-services',
    'test-constants',
    'test-utils',
    'toml-utils',
    'toy-vms',
    'uuid-utils',
    'waiting-queues',
];

let startTime: any, endTime: any;

const start = () => {
  startTime = new Date();
}

const end = () => {
  endTime = new Date();
  return Math.round(endTime - startTime)
}

(async () => {

    // // Initialize an ethers provider for the Ethereum network you want to connect to

    // // Function to get the latest block number
    // async function getLatestBlockNumber(chain: string) {
    
    //     const provider = new ethers.providers.JsonRpcProvider(`https://nodes.sequence.app/${chain}`); // Replace with your Infura project ID or your own Ethereum node URL

    // try {
    //     const blockNumber = await provider.getBlockNumber();
    //     return blockNumber;
    // } catch (error) {
    //     console.error('Error getting block number:', error);
    // }
    // }

    // let cratesComplete = true
    // let i = 0
    // // Call the function to get the latest block number
    // const intelligence = [
    // ]

    // while(cratesComplete){
    //     start()
    //     const blockNumber = await getLatestBlockNumber(networks[i % networks.length]);
    //     const time = end()
    //     console.log(blockNumber)

    //     intelligence.push({
    //         blockNumber: blockNumber,
    //         crate: crates[i],
    //         talis: library[time % Object.keys(library).length]
    //     })
        
    //     i++
    //     if(i >= crates.length) cratesComplete = false
    // }

    const filename = 'data.json';
    const writeNetworkFileName = 'data_networks.json'
    fs.readFile(filename, 'utf8', async (err, data) => {
        const query = JSON.parse(data)
        for(let i = 0; i< query.length; i++){
            query[i]['network'] = networks[i % networks.length]
        }
        fs.writeFile(writeNetworkFileName, JSON.stringify(query), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Data has been written to', writeNetworkFileName);
            }
        });
    })
})()