import info from '../info';

const chapters = [
	{
		location: 'Bay Area, CA',
		lat: 37.339044,
		lng: -121.942967,
		team: info.team.map((member) => ({
			name: member.name,
			position: member.position,
			headshot: member.img
		}))
	},
	{
		location: 'Aurora, CO',
		lat: 39.7294,
		lng: -104.8319,
		team: [
			{
				name: 'Sonya Pales',
				position: 'President',
				headshot: '/chapters/aurora/sonya-pales.webp'
			},
			{
				name: 'Lily Teferi',
				position: 'Secretary',
				headshot: '/chapters/aurora/lily-teferi.webp'
			}
		]
	},
	{
		location: 'Bucks County, PA',
		lat: 40.4108,
		lng: -75.2479,
		team: [
			{
				name: 'Katherine Liu',
				position: 'President',
				headshot: '/chapters/bucks-county/katherine-liu.webp'
			},
			{
				name: 'Grace Sandy',
				position: 'Vice President',
				headshot: '/chapters/bucks-county/grace-sandy.webp'
			},
			{
				name: 'William Yan',
				position: 'Secretary',
				headshot: '/chapters/bucks-county/william-yan.webp'
			},
			{
				name: 'Amanda Zeiser',
				position: 'Treasurer',
				headshot: '/chapters/bucks-county/amanda-zeiser.webp'
			},
			{
				name: 'Mason Lentini',
				position: 'Design Leader',
				headshot: '/chapters/bucks-county/mason-lentini.webp'
			}
		]
	},
	{
		location: 'Chicago, IL',
		lat: 41.8832,
		lng: -87.6324,
		team: [
			{
				name: 'Sofia Alvarez',
				position: 'President',
				headshot: '/chapters/chicago/sofia-alvarez.webp'
			},
			{
				name: 'Layla Rhyne',
				position: 'Vice President',
				headshot: '/chapters/chicago/layla-rhyne.webp'
			},
			{
				name: 'Heart Esmane',
				position: 'PR Leader',
				headshot: '/chapters/chicago/heart-esmane.webp'
			}
		]
	},
	{
		location: 'Coppell, TX',
		lat: 32.9546,
		lng: -98.015,
		team: [
			{
				name: 'Atheeqa Shaik',
				position: 'Co-President',
				headshot: '/chapters/coppell/atheeqa-shaik.webp'
			},
			{
				name: 'Triveda Gorantla',
				position: 'Co-President',
				headshot: '/chapters/coppell/triveda-gorantla.webp'
			},
			{
				name: 'Anshika Arora',
				position: 'Secretary',
				headshot: '/chapters/coppell/anshika-arora.webp'
			},
			{
				name: 'Nanditha Bodapati',
				position: 'Treasurer',
				headshot: '/chapters/coppell/nanditha-bodapati.webp'
			},
			{ name: 'Jiwoo Choi', position: 'PR Leader', headshot: '/chapters/coppell/jiwoo-choi.webp' }
		]
	},
	{
		location: 'Washington, D.C.',
		lat: 38.900773,
		lng: -77.038249,
		team: [
			{ name: 'Nimrah Imam', position: 'Co-President', headshot: '/chapters/dc/nimrah-imam.webp' },
			{
				name: 'Saifullah Mahmood',
				position: 'Co-President',
				headshot: '/chapters/dc/saifullah-mahmood.webp'
			},
			{
				name: 'Ayan Imam',
				position: 'Secretary & Historian',
				headshot: '/chapters/dc/ayan-imam.webp'
			}
			// {
			//  name: 'Luis Quinterro-Gallo',
			//  position: 'PR Leader',
			//  headshot: '/chapters/dc/luis-quinterro-gallo.webp'
			// }
		]
	},
	{
		location: 'Los Angeles, CA',
		lat: 34.5522,
		lng: -119.2437,
		team: [
			{
				name: 'Catherine Zhu',
				position: 'President',
				headshot: '/chapters/los-angeles/catherine-zhu.webp'
			},
			{ name: 'Ivy Doan', position: 'Secretary', headshot: '/chapters/los-angeles/ivy-doan.webp' },
			{
				name: 'Michelle Vong',
				position: 'Co-Treasurer',
				headshot: '/chapters/los-angeles/michelle-vong.webp'
			},
			{
				name: 'Tiffany Saw',
				position: 'Co-Treasurer',
				headshot: '/chapters/los-angeles/tiffany-saw.webp'
			},
			{ name: 'Julie Phan', position: 'PR', headshot: '/chapters/los-angeles/julie-phan.webp' }
		]
	},
	{
		location: 'Huntington Beach, CA',
		lat: 33.6595,
		lng: -117.9988,
		team: [
			{
				name: 'Preston Phan',
				position: 'President',
				headshot: '/chapters/huntington-beach/preston-phan.webp'
			},
			{
				name: 'Minh Thai',
				position: 'Vice President',
				headshot: '/chapters/huntington-beach/minh-thai.webp'
			},
			{
				name: 'Anthony Luu',
				position: 'Secretary & Historian',
				headshot: '/chapters/huntington-beach/anthony-luu.webp'
			},
			{
				name: 'Ryan Hoang',
				position: 'Treasurer',
				headshot: '/chapters/huntington-beach/ryan-hoang.webp'
			},
			{
				name: 'Ethan Nguyen',
				position: 'Design Leader',
				headshot: '/chapters/huntington-beach/ethan-nguyen.webp'
			},
			{
				name: 'Jessica Nguyen',
				position: 'PR Leader',
				headshot: '/chapters/huntington-beach/jessica-nguyen.webp'
			}
		]
	},
	{
		location: 'Forsyth, GA',
		lat: 33.0343,
		lng: -83.9382,
		team: [
			{
				name: 'Adrien Chung',
				position: 'Co-President',
				headshot: '/chapters/forsyth/adrien-chung.webp'
			},
			{
				name: 'Nithin Manikandan',
				position: 'Co-President',
				headshot: '/chapters/forsyth/nithin-manikandan.webp'
			},
			{
				name: 'Siddharth Gotipatti',
				position: 'PR Leader',
				headshot: '/chapters/forsyth/siddharth-gotipatti.webp'
			}
		]
	},
	{
		location: 'New York City, NY',
		lat: 40.71517,
		lng: -74.005125,
		team: [
			{ name: 'Tisha Ray', position: 'President', headshot: '/chapters/nyc/tisha-ray.webp' },
			{ name: 'Abida Marium', position: 'Secretary', headshot: '/chapters/nyc/abida-marium.webp' },
			{
				name: 'Sabiha Choudhury',
				position: 'PR Leader',
				headshot: '/chapters/nyc/sabiha-choudhury.webp'
			}
		]
	},
	{
		location: 'Oklahoma City, OK',
		lat: 35.4689,
		lng: -97.5195,
		team: [
			{
				name: 'Emelia Chambers',
				position: 'Co-President',
				headshot: '/chapters/oklahoma-city/emelia-chambers.webp'
			},
			{
				name: 'Gracelyn Westerbeck',
				position: 'Co-President',
				headshot: '/chapters/oklahoma-city/gracelyn-westerbeck.webp'
			},
			{
				name: 'Charity Pina',
				position: 'Secretary',
				headshot: '/chapters/oklahoma-city/charity-pina.webp'
			},
			{
				name: 'Drake Mossauer',
				position: 'Treasurer',
				headshot: '/chapters/oklahoma-city/drake-mossauer.webp'
			},
			{
				name: 'Adriana Hollis',
				position: 'Historian',
				headshot: '/chapters/oklahoma-city/adriana-hollis.webp'
			},
			{
				name: 'Sophia Hart',
				position: 'Historian',
				headshot: '/chapters/oklahoma-city/sophia-hart.webp'
			},
			{
				name: 'McKellyn Johnson',
				position: 'PR Leader',
				headshot: '/chapters/oklahoma-city/mckellyn-johnson.webp'
			},
			{
				name: 'Angela Williams',
				position: 'PR Leader',
				headshot: '/chapters/oklahoma-city/angela-williams.webp'
			},
			{
				name: 'Morgan St John',
				position: 'Ideas Coordinator',
				headshot: '/chapters/oklahoma-city/morgan-st-john.webp'
			}
		]
	},
	{
		location: 'Plano, TX',
		lat: 34.0198,
		lng: -96.6989,
		team: [
			{
				name: 'Annaly Nguyen',
				position: 'Co-President',
				headshot: '/chapters/plano/annaly-nguyen.webp'
			},
			{
				name: 'Sophia Taufique',
				position: 'Co-president',
				headshot: '/chapters/plano/sophia-taufique.webp'
			},
			{
				name: 'Lucas Daouda',
				position: 'Treasurer',
				headshot: '/chapters/plano/lucas-daouda.webp'
			},
			{
				name: 'Celeste Wenick',
				position: 'PR Leader',
				headshot: '/chapters/plano/celeste-wenick.webp'
			},
			{ name: 'Devi Mehta', position: 'Secretary', headshot: '/chapters/plano/devi-mehta.webp' }
		]
	},
	{
		location: 'San Francisco, CA',
		lat: 38.7749,
		lng: -122.4194,
		team: [
			{
				name: 'Mia Shan',
				position: 'President',
				headshot: '/chapters/san-francisco/mia-shan.webp'
			},
			{
				name: 'Rachel Flynn',
				position: 'Secretary',
				headshot: '/chapters/san-francisco/rachel-flynn.webp'
			},
			{
				name: 'Kadie Kitsuda',
				position: 'Treasurer',
				headshot: '/chapters/san-francisco/kadie-kitsuda.webp'
			},
			{
				name: 'Amelia Cheung',
				position: 'PR Leader',
				headshot: '/chapters/san-francisco/amelia-cheung.webp'
			}
		]
	},
	{
		location: 'Wylie, TX',
		lat: 33.0063,
		lng: -96.5391,
		team: [
			{
				name: 'Vanshika Vittamsetti',
				position: 'President',
				headshot: '/chapters/wylie/vanshika-vittamsetti.webp'
			},
			{
				name: 'Neha Tharakan',
				position: 'Treasurer',
				headshot: '/chapters/wylie/neha-tharakan.webp'
			},
			{ name: 'Sarah Sadiq', position: 'Secretary', headshot: '/chapters/wylie/sarah-sadiq.webp' },
			{
				name: 'Aaliya Ruhil',
				position: 'Secretary',
				headshot: '/chapters/wylie/aaliya-ruhil.webp'
			},
			{
				name: 'Kamalini Nukanaboina',
				position: 'PR Leader',
				headshot: '/chapters/wylie/kamalini-nukanaboina.webp'
			}
		]
	},
	{
		location: 'Irvine, CA',
		lat: 32.6846,
		lng: -117.8265,
		team: [
			{ name: 'Adelyn Pham', position: 'President', headshot: '/chapters/irvine/adelyn-pham.webp' },
			{
				name: 'Kyra Sequeira',
				position: 'Secretary',
				headshot: '/chapters/irvine/kyra-sequeira.webp'
			},
			{ name: 'Sarah Park', position: 'Treasurer', headshot: '/chapters/irvine/sarah-park.webp' },
			{
				name: 'Shreya Pandey',
				position: 'Outreach and Communications Coordinator',
				headshot: '/chapters/irvine/shreya-pandey.webp'
			},
			{
				name: 'Grace Feng',
				position: 'Design Leader',
				headshot: '/chapters/irvine/grace-feng.webp'
			},
			{ name: 'Ashley Yeo', position: 'PR Leader', headshot: '/chapters/irvine/ashley-yeo.webp' },
			{
				name: 'Gemma Lai',
				position: 'Event and Engagement Coordinator',
				headshot: '/chapters/irvine/gemma-lai.webp'
			}
		]
	}
];

export default chapters;
