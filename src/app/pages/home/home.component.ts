import { Component, OnInit } from '@angular/core';

import { TezosToolkit } from '@taquito/taquito';
import { TaquitoTezosDomainsClient } from '@tezos-domains/taquito-client';
import { Tzip16Module } from '@taquito/tzip16';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     this.getDomains();
  }

  public async getDomains() {
    const address = 'tz1VQnqCCqX4K5sP3FNkVSNKTdCAMJDd3E1n';

    const tezos = new TezosToolkit('https://mainnet-tezos.giganode.io/');
    tezos.addExtension(new Tzip16Module());
    const client = new TaquitoTezosDomainsClient({ tezos, network: 'mainnet', caching: { enabled: true } });

    const domain = await client.resolver.resolveReverseRecord(address);
    /*
    .then(
      function succ(asd) {console.log("scccccc",asd)},
      function errr(asd) {console.log("errrrrr", asd)},

    );
    */
    console.log(domain); 

  }

}
