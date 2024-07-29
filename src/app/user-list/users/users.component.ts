import {Component, inject, OnInit} from '@angular/core';
import {UserModel} from "./user/user.model";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  userCountMap = new Map<number, number>;
  private userService: UserService = inject(UserService);

  ngOnInit() {
    //userデータを取得
    this.users = this.userService.usersList;
    //userのカウント増減記録用Mapを初期化
    this.users.map(user => {
      this.userCountMap.set(user.id, 0);
    })
  }

  /**
   * count up
   * @param id
   */
  onCountUp(id: number) {
    const nowCount = this.nowCount(id);
    this.userCountMap.set(id, nowCount + 1);
  }

  /**
   * count down
   * @param id
   */
  onCountDown(id: number) {
    const nowCount = this.nowCount(id);
    this.userCountMap.set(id, nowCount - 1);
  }

  /**
   * 指定ユーザの現在のカウントを取得
   * @param id
   */
  nowCount(id: number): number {
    return this.userCountMap.get(id)!;
  }

  /**
   * カウントの変更を反映する処理
   */
  onConfirmCountChange() {
    //countが変更されていなければ何もしない
    let isCountChange = false;
    for (const value of this.userCountMap.values()) {
      if (value != 0) {
        isCountChange = true;
      }
    }
    if (!isCountChange) {
      return;
    }
    //確認メッセージを表示
    if (!window.confirm('ポイントを加算しますか?')) {
      return;
    }
    //pointの増減をusersに反映
    this.users.map(user => {
      user.point = user.point + this.nowCount(user.id);
      this.userCountMap.set(user.id, 0);
    })
  }

  /**
   * 全ユーザのポイントを0にリセットする処理
   */
  onPointReset(){
    //確認メッセージを表示
    if (!window.confirm('ポイントをリセットしますか?')) {
      return;
    }
    //Reset
    this.users.map(user => {
      user.point = 0;
    })
  }
}
