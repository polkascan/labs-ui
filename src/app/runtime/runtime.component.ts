import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-runtime',
  templateUrl: './runtime.component.html',
  styleUrls: ['./runtime.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuntimeComponent implements OnInit {
  calls: BehaviorSubject<any>;
  events: BehaviorSubject<any>;
  storages: BehaviorSubject<any>;
  constants: BehaviorSubject<any>;
  errorsMessages: BehaviorSubject<any>;

  visibleColumns = {
    calls: ['icon', 'name', 'lookup', 'arguments', 'details'],
    events: ['icon', 'name', 'lookup', 'attributes', 'details'],
    storages: ['icon', 'name', 'type', 'details'],
    constants: ['icon', 'name', 'type', 'value', 'details'],
    errors: ['icon', 'name', 'index', 'documentation']
  };

  constructor() {
    this.calls = new BehaviorSubject<any>([
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "callName": "attest",
        "palletCallIdx": 3,
        "lookup": "0x1803",
        "documentation": "Attest to a statement, needed to finalize the claims process.\n\nWARNING: Insecure unless your chain includes `PrevalidateAttests` as a `SignedExtension`.\n\nUnsigned Validation:\nA call to attest is deemed valid if the sender has a `Preclaim` registered\nand provides a `statement` which is expected for the account.\n\nParameters:\n- `statement`: The identity of the statement which is being attested to in the signature.\n\n<weight>\nThe weight of this call is invariant over the input parameters.\nWeight includes logic to do pre-validation on `attest` call.\n\nTotal Complexity: O(1)\n</weight>",
        "countArguments": 1
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "callName": "claim",
        "palletCallIdx": 0,
        "lookup": "0x1800",
        "documentation": "Make a claim to collect your DOTs.\n\nThe dispatch origin for this call must be _None_.\n\nUnsigned Validation:\nA call to claim is deemed valid if the signature provided matches\nthe expected signed message of:\n\n> Ethereum Signed Message:\n> (configured prefix string)(address)\n\nand `address` matches the `dest` account.\n\nParameters:\n- `dest`: The destination account to payout the claim.\n- `ethereum_signature`: The signature of an ethereum signed message\n   matching the format described above.\n\n<weight>\nThe weight of this call is invariant over the input parameters.\nWeight includes logic to validate unsigned `claim` call.\n\nTotal Complexity: O(1)\n</weight>",
        "countArguments": 2
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "callName": "claim_attest",
        "palletCallIdx": 2,
        "lookup": "0x1802",
        "documentation": "Make a claim to collect your DOTs by signing a statement.\n\nThe dispatch origin for this call must be _None_.\n\nUnsigned Validation:\nA call to `claim_attest` is deemed valid if the signature provided matches\nthe expected signed message of:\n\n> Ethereum Signed Message:\n> (configured prefix string)(address)(statement)\n\nand `address` matches the `dest` account; the `statement` must match that which is\nexpected according to your purchase arrangement.\n\nParameters:\n- `dest`: The destination account to payout the claim.\n- `ethereum_signature`: The signature of an ethereum signed message\n   matching the format described above.\n- `statement`: The identity of the statement which is being attested to in the signature.\n\n<weight>\nThe weight of this call is invariant over the input parameters.\nWeight includes logic to validate unsigned `claim_attest` call.\n\nTotal Complexity: O(1)\n</weight>",
        "countArguments": 3
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "callName": "mint_claim",
        "palletCallIdx": 1,
        "lookup": "0x1801",
        "documentation": "Mint a new claim to collect DOTs.\n\nThe dispatch origin for this call must be _Root_.\n\nParameters:\n- `who`: The Ethereum address allowed to collect this claim.\n- `value`: The number of DOTs that will be claimed.\n- `vesting_schedule`: An optional vesting schedule for these DOTs.\n\n<weight>\nThe weight of this call is invariant over the input parameters.\nWe assume worst case that both vesting and statement is being inserted.\n\nTotal Complexity: O(1)\n</weight>",
        "countArguments": 4
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "callName": "move_claim",
        "palletCallIdx": 4,
        "lookup": "0x1804",
        "documentation": "",
        "countArguments": 3
      }
    ]);

    this.events = new BehaviorSubject<any>([
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "eventName": "Claimed",
        "palletEventIdx": 0,
        "lookup": "0x1800",
        "documentation": "Someone claimed some DOTs. `[who, ethereum_address, amount]`",
        "countAttributes": 3
      }
    ]);

    this.storages = new BehaviorSubject<any>([
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "storageName": "Claims",
        "palletStorageIdx": 0,
        "modifier": "Optional",
        "keyPrefixPallet": "0x9c5d795d0297be56027a4b2464e33397",
        "keyPrefixName": "0x9c5d795d0297be56027a4b2464e33397",
        "key1ScaleType": null,
        "key1Hasher": null,
        "key2ScaleType": null,
        "key2Hasher": null,
        "valueScaleType": "6",
        "isLinked": null,
        "documentation": ""
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "storageName": "Preclaims",
        "palletStorageIdx": 4,
        "modifier": "Optional",
        "keyPrefixPallet": "0x9c5d795d0297be56027a4b2464e33397",
        "keyPrefixName": "0x63e6d3c1fb15805edfd024172ea4817d",
        "key1ScaleType": null,
        "key1Hasher": null,
        "key2ScaleType": null,
        "key2Hasher": null,
        "valueScaleType": "63",
        "isLinked": null,
        "documentation": " Pre-claimed Ethereum accounts, by the Account ID that they are claimed to."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "storageName": "Signing",
        "palletStorageIdx": 3,
        "modifier": "Optional",
        "keyPrefixPallet": "0x9c5d795d0297be56027a4b2464e33397",
        "keyPrefixName": "0xc0793c53db77bf57f00ed54aa9119289",
        "key1ScaleType": null,
        "key1Hasher": null,
        "key2ScaleType": null,
        "key2Hasher": null,
        "valueScaleType": "230",
        "isLinked": null,
        "documentation": " The statement kind that must be signed, if any."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "storageName": "Total",
        "palletStorageIdx": 1,
        "modifier": "Default",
        "keyPrefixPallet": "0x9c5d795d0297be56027a4b2464e33397",
        "keyPrefixName": "0xf43d6436dec51f09c3b71287a8fc9d48",
        "key1ScaleType": null,
        "key1Hasher": null,
        "key2ScaleType": null,
        "key2Hasher": null,
        "valueScaleType": null,
        "isLinked": null,
        "documentation": ""
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "storageName": "Vesting",
        "palletStorageIdx": 2,
        "modifier": "Optional",
        "keyPrefixPallet": "0x9c5d795d0297be56027a4b2464e33397",
        "keyPrefixName": "0x5f27b51b5ec208ee9cb25b55d8728243",
        "key1ScaleType": null,
        "key1Hasher": null,
        "key2ScaleType": null,
        "key2Hasher": null,
        "valueScaleType": "228",
        "isLinked": null,
        "documentation": " Vesting schedule for a claim.\n First balance is the total amount that should be held for vesting.\n Second balance is how much should be unlocked per block.\n The block number is when the vesting should start."
      }
    ]);

    this.constants = new BehaviorSubject<any>([
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "constantName": "Prefix",
        "palletConstantIdx": 0,
        "scaleType": "scale_info::10",
        "value": "\"Pay DOTs to the Polkadot account:\"",
        "documentation": ""
      }
    ]);

    this.errorsMessages = new BehaviorSubject<any>([
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "InvalidEthereumSignature",
        "palletIdx": 0,
        "errorIdx": 24,
        "documentation": "Invalid Ethereum signature."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "InvalidStatement",
        "palletIdx": 4,
        "errorIdx": 24,
        "documentation": "A needed statement was not included."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "PotUnderflow",
        "palletIdx": 3,
        "errorIdx": 24,
        "documentation": "There's not enough in the pot to pay out some unvested amount. Generally implies a logic\nerror."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "SenderHasNoClaim",
        "palletIdx": 2,
        "errorIdx": 24,
        "documentation": "Account ID sending transaction has no claim."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "SignerHasNoClaim",
        "palletIdx": 1,
        "errorIdx": 24,
        "documentation": "Ethereum address has no claim."
      },
      {
        "specName": "polkadot",
        "specVersion": 9151,
        "pallet": "Claims",
        "errorName": "VestedBalanceExists",
        "palletIdx": 5,
        "errorIdx": 24,
        "documentation": "The account already has a vested balance."
      }
    ]);
  }

  ngOnInit(): void {
  }

  trackCall(index: number, item: any): string {
    return item.callName as string;
  }

  trackEvent(index: number, item: any): string {
    return item.eventName as string;
  }

  trackStorage(index: number, item: any): string {
    return item.storageName as string;
  }

  trackConstant(index: number, item: any): string {
    return item.constantName as string;
  }

  trackError(index: number, item: any): string {
    return item.errorName as string;
  }

}
