// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const LIVE_URL = "https://arturoalbero.github.io";


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Entornos de desarrollo',
			social: {
				github: 'https://www.boe.es/eli/es/rd/2023/05/29/405',
			},
			sidebar: [
				{
					label: 'Unidades de programación',
					items: [
						// Each item here is one entry in the navigation menu.
						{label: 'UP01', items:[]},
						{label: 'UP02', items:[
							{ label: 'Presentación', slug: 'up/up02/pildoras/00-presentacion-up2'},
							{ label: 'El documento IEEE 830', slug: 'up/up02/pildoras/01-el-documento-ieee830'},
							{ label: 'Casos de uso', slug: 'up/up02/pildoras/02-diagramas-cdu'},
							{ label: 'Transición de estados', slug:'up/up02/pildoras/03-diagramas-dte'},
							{ label: 'Actividad', slug: 'up/up02/pildoras/diagramas-act'},
							{ label: 'Interacción', slug: 'up/up02/pildoras/05-diagramas-interac'}
						]},
						{label: 'UP03', items:[]},
						{label: 'UP04', items:[]},
						{label: 'UP05', items:[]},
						{label: 'UP06', items:[]}
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
