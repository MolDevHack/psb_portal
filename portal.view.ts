namespace $.$$ {

	const Stats_response = $mol_data_record({
		years: $mol_data_array( $mol_data_integer ),
		plan: $mol_data_array( $mol_data_number ),
		fact: $mol_data_array( $mol_data_number ),
	})
	
	export class $psb_portal extends $.$psb_portal {

		app() {
			return this.$.$mol_state_arg.value( 'app' )
		}
		
		@ $mol_mem
		menu_items() {
			return Object.keys( this.data() ).map( app => this.Menu_item( app ) )
		}
		
		pages() {
			const app = this.app()
			return [
				this.Menu(),
				... !app ? []
					: app === 'events' ? this.Events().pages()
					: app === 'credits' ? [ this.Credits() ]
					: app === 'deposits' ? [ this.Deposits() ]
					: [ this.App( app ) ]
			]
		}
		
		app_title( app: string ) {
			return this.data()[ app ].title
		}

		@ $mol_mem_key
		app_uri( app: string, next?: string ) {
			const suffix =  '/mol_lights=' + String( this.$.$mol_lights() )
			if( this.app() === app ) {
				if( next ) next = next.replace( /\/mol_lights=(true|false)/, '' )
				const uri = this.$.$mol_state_arg.value( 'uri', next  )
				return ( uri ?? this.data()[ app ].uri ) + suffix
			} else {
				return this.data()[ app ].uri + suffix
			}
		}

		app_arg( app: string ) {
			return { app, uri: null }
		}
		
		credits_title() {
			return this.data().credits.title
		}
		
		deposits_title() {
			return this.data().deposits.title
		}
		
		@ $mol_mem
		stats() {
			return Stats_response( this.$.$mol_fetch.json( 'psb/portal/portal_stats.json' ) )
		}
		
		stats_years() { return this.stats().years }
		stats_plan() { return this.stats().plan }
		stats_fact() { return this.stats().fact }
		
	}

}
