import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  city:Array<any>=[
      {'name':'Adana',
      'value':1,
      'down':[
        {'name':'Seyhan',
        'value':101,
        'places':[
          {'name':'01 Beslenme Danışmanlığı',
            'pname':'Özel Beslenme Danışmanlığı Merkezi',
            'unvan':'Uzman Diyetisyen',
        'animate':'zoom-in',
        'animate-duration':'800'
          },
          {'name':'01 Hastanesi',
            'pname':'Özel Hastane',
            'unvan':'Diyetisyen',
        'animate':'fade-up',
        'animate-duration':'600'}
        ]
        },
        {'name':'Ceyhan',
        'value':102,
        'places':[
          {'name':'01_1 Beslenme Danışmanlığı'},
          {'name':'01_1 Hastanesi'}
        ]
        }]
      },
      {'name':'Edirne',
      'value':22,
      'down':[
        {'name':'Merkez',
        'value':2201,
        'places':[
          {'name':'Barış Can Gülüm',
          'degree':'Diyetisyen',
          'pname':'Simge Beslenme Danışmanlığı',
          'type':'Özel Beslenme Danışmanlığı Merkezi',
          'address':'Kocasinan Mahallesi Büyükgöze Sokak Pelin Sitesi C blok Daire:2 Edirne Merkez',
          'tel':'0284 555 55 55',
          'telD':'tel:+902845555555',
          'ins':'@diyetisyenbariscangulum',
          'insUrl':'https://www.instagram.com/diyetisyenbariscangulum',
          'mail':'diyetisyencan@mail.com',
          'mailTo':'mailto:diyetisyencan@mail.com',
          'maps': 'https://goo.gl/maps/fVUTF4xPd6D2'
          },
          {'name':'Simge Siber Yıldırım',
          'degree':'Uzman Diyetisyen',
          'pname':'Simge Beslenme Danışmanlığı',
          'type':'Özel Beslenme Danışmanlığı Merkezi',
          'address':'Kocasinan Mahallesi Büyükgöze Sokak Pelin Sitesi C blok Daire:2 Edirne Merkez',
          'tel':'0284 555 55 55',
          'telD':'tel:+902845555555',
          'ins':'@simgesiberyildirim',
          'insUrl':'https://www.instagram.com/simgesiberyildirim',
          'mail':'diyetisyencan@mail.com',
          'mailTo':'mailto:diyetisyencan@mail.com',
          'web': 'http://www.simgediyet.com/',
          'webN':'www.simgediyet.com',
          'maps': 'https://goo.gl/maps/fVUTF4xPd6D2'
  }
        ]},
        {'name':'Keşan',
        'value':2202,
        'places':[
          {'name':'22_2 Beslenme Danışmanlığı'},
          {'name':'22_2 Hastanesi'}
        ]}]
      },
      {'name':'Hatay',
      'value':31,
      'down':[
        {'name':'Antakya',
        'value':3101,
        'places':[
          {'name':'31_1 Beslenme Danışmanlığı'},
          {'name':'31_1 Hastanesi'}
        ]},
        {'name':'Defne',
        'value':3102,
        'places':[
          {'name':'31_2 Beslenme Danışmanlığı'},
          {'name':'31_2 Hastanesi'},
          {'name':'31_3 Beslenme Danışmanlığı'}
        ]}]
      }];
      selectedCity = this.city[0];
      selectedDown = this.selectedCity.down[0];
      selectedPlaces = this.selectedDown.places[0];
      showedOption=[];

  constructor() { }
}
