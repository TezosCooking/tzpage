
import { AccountInfo } from '@airgap/beacon-sdk'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { State } from 'src/app/app.reducer'
import { BeaconService } from 'src/app/services/beacon/beacon.service'
import { StoreService } from 'src/app/services/store/store.service'
import * as actions from '../../connect-wallet.actions'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None 

})
export class HeaderComponent implements OnInit {
  connectedWallet$: Observable<AccountInfo | undefined> | undefined

  isCollapsed = true
  dogVision = false
  constructor(
    private readonly router: Router,
    private readonly store$: Store<State>,
    private readonly storeService: StoreService,
    private readonly beaconService: BeaconService
  ) {
    this.connectedWallet$ = this.store$.select(
      (state) => (state as any).app.connectedWallet // TODO: Fix type
    )
    this.storeService.dogvision$.subscribe(
      (dogVision) => (this.dogVision = dogVision)
    )
  }

  ngOnInit(): void {}

  connectWallet() {
    this.store$.dispatch(actions.connectWallet())
  }

  disconnectWallet() {
    this.store$.dispatch(actions.disconnectWallet())
  }

  openBlockexplorer() {
    this.beaconService.openAccountLink()
  }

  togglDogVision() {
    this.storeService.dogvision$.next(!this.dogVision)
  }
}