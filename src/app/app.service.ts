import { Injectable } from "@angular/core";
import * as wasm from '../../wasm-game-of-life/pkg/wasm_game_of_life';


@Injectable({
  providedIn: "root"
})
export class AppService {

  greet() {
    return wasm.greet();
  }
}
