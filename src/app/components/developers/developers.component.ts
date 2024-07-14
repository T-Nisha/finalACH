// developers.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {
  developers = [
    {
      id: 1,
      name: 'Ravindra Nagare',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur aliquid pariatur a. Libero, minus! In minima et architecto voluptatum, iure nam soluta fugit aliquam rem magni sed temporibus doloribus porro.',
      contacts: [
        { name: 'Mobile No.', description: '+917775083976' },
        { name: 'Email', description: 'nagare.rb9@gmail.com' },
        { name: 'LinkedIn', description: 'https://in.linkedin.com/in/ravindra-nagare-b5816b1b6' }
      ],
      qualification: [
        { name: '', description: 'Computer Engineering from SPPU' }
      ]
    },
    {
      id: 2,
      name: 'Sakshi Dhawale',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur aliquid pariatur a. Libero, minus! In minima et architecto voluptatum, iure nam soluta fugit aliquam rem magni sed temporibus doloribus porro.',
      contacts: [
        { name: 'Mobile No.', description: '+917775d083976' },
        { name: 'Email', description: 'nagare.rb9@gdmail.com' },
        { name: 'LinkedIn', description: 'https://in.linkedin.com/in/ravindra-nagare-b5816b1b6' }
      ],
      qualification: [
        { name: 'Mobile No.', description: '+917775083976' }
      ]
    },
    {
      id: 3,
      name: 'Nisha Takalkar',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur aliquid pariatur a. Libero, minus! In minima et architecto voluptatum, iure nam soluta fugit aliquam rem magni sed temporibus doloribus porro.',
      contacts: [
        { name: 'Mobile No.', description: '+917775083976' },
        { name: 'Email', description: 'nagare.rb9@gmail.com' },
        { name: 'LinkedIn', description: 'https://in.linkedin.com/in/ravindra-nagare-b5816b1b6' }
      ],
      qualification: [
        { name: 'Mobile No.', description: '+917775083976' }
      ]
    },
    {
      id: 4,
      name: 'Bhagwat Kokate',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequatur aliquid pariatur a. Libero, minus! In minima et architecto voluptatum, iure nam soluta fugit aliquam rem magni sed temporibus doloribus porro.',
      contacts: [
        { name: 'Mobile No.', description: '+917775083976' },
        { name: 'Email', description: 'nagare.rb9@gmail.com' },
        { name: 'LinkedIn', description: 'https://in.linkedin.com/in/ravindra-nagare-b5816b1b6' }
      ],
      qualification: [
        { name: 'Mobile No.', description: '+917775083976' }
      ]
    }
    // Add more developers as needed
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch data from service/API if needed
  }
}
