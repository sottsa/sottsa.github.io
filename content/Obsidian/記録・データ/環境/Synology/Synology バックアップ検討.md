最新状況
・8TB HDD×1を新規購入し、外付けHDDケースに入れてext4フォーマットでメインのバックアップ用
・既存のメインバックアップHDD：4TBは、そのまま外して塩漬け
・既存の3TB HDDをNTFSでフォーマットして部分Backupとsozzaフォルダの差分バックアップ用
　NTFSのHDDの差分バックアップデータをWindowsで参照・復元可能なように、Hyper Backup Explorer をインストール

過去の検討
[Synology バックアップ](obsidian://open?vault=sync&file=Import%2FSimpleNote%2F%E7%92%B0%E5%A2%83%2FSynology%20%E3%83%90%E3%83%83%E3%82%AF%E3%82%A2%E3%83%83%E3%83%97)

参考：
[SynologyのNASからUSB外付けHDDへ自動バックアップ！「Hyper Backup」を使ってパソコンからデータを直接見えるようにする方法 | かめらとブログ。](https://camera10.me/blog/synology_nas_backup)

現状外付けHDDをext4でフォーマットしているが、Windows直では読み書きできない
→ アプリを入れれば対応できるはずだが、いまいちうまくいかなかった

SynologyでexFATフォーマットを使えるよう、有償オプション：exFAT Access（＄3.99） を購入する
→ ライセンスは別のSynologyに持ち運び不可！

ただし、exFATはリスクがある！
[実は危険？？「exFATフォーマット」との付き合い方｜L'espace Vision の "note"](https://www.note.lespace.co.jp/n/n50b26ef76f88)

当初方針：
・新規購入した8TBは、ext4としてマスターバックアップとする
・既存の4TBを、exFATにしてwindowsでアクセス可能とする
・差分バックアップ用のHDDもext4か
　検証１→ 一旦exFATでwindowsからファイル復元可能か確認し
　　復元可能であればexFAT
　　復元不可なら、ext4
　　→復元不可！！
・どんなバックアップをどこにとるか。電源を入れっぱなし？
　検証２→ 使用していないタイミングで自動縮退するか
　　2種のHDDケース毎に、使用していないタイミングで、
　　Windows エクスプローラから見えるか、すぐアクセスできるか確認
  　 usbshare1：LGB-EKU3：エクスプローラから見える、アクセスまで少し時間がかかる
  　 usbshare2：GW3.5AA-SUP3：

方針変更：
・NTFSが使えることが判明：[外部デバイス | DSM - Synology ナレッジセンター](https://kb.synology.com/ja-jp/DSM/help/DSM/AdminCenter/system_externaldevice_devicelist?version=7)
・ツールを入れれば、差分バックアップのデータにアクセス可能：[クライアントデバイスでHyper Backup Explorerを使用してバックアップファイルを取得する方法 - Synology ナレッジセンター](https://kb.synology.com/ja-jp/DSM/tutorial/How_to_retrieve_backup_files_with_Hyper_Backup_Explorer)
↓
・既存の3TBをNTFSでフォーマットして、差分バックアップ＆単一バックアップ
・8TBはext4のまま、かな
　NTFSの安定度を見て問題なさそうならNTFSへの切り替えを検討
　NTFSは遅いかも(12/7)
　→ 差分が多いと単一バージョンでも時間がかかるため、検証し辛い！

データバックアップタスク
①：sozza差分Backup_8TB
　バックアップ先タイプ：ローカルフォルダ＆USB
　バックアップタスクの作成
　　共有フォルダ：usbshare2
　　ディレクトリ　：nsozza_差分
 バックアップするフォルダ：sozza
　タスク：sozza差分Backup_8TB
　　バックアップスケジュール：毎日：0:00
　■バックアップローテーションを有効にする
②：全Backup 単一Ver 8TB WD Blue
　バックアップ先タイプ：ローカルフォルダ＆USB（単一バージョン）
　バックアップタスクの作成
　　共有フォルダ：usbshare2
　バックアップするフォルダ：全て
　タスク：全Backup 単一Ver 8TB WD Blue
　　ディレクトリ　：nsozza_1
　バックアップするフォルダ：全て
　　バックアップスケジュール：日曜日：2:00
　バックアップ時間：約14時間（全初回バックアップ）
　バックアップ時間その２：2時間10分(12/8深夜)
　バックアップ時間その３：13分(12/8朝)
②-2上記の他、以下のフォルダに過去の差分バックアップ保存(2024/12/4までのsozza差分バックアップ)
 /usbshare2/usbshare1 backup/nsozza_差分.hbk
③：sozza差分Backup_NTFS
　②-2のデータを引き継ぎ追加で差分
　バックアップ先タイプ：ローカルフォルダ＆USB
　既存のタスクに再リンク
　　共有フォルダ：usbshare1
　　ディレクトリ　：nsozza_差分
　バックアップするフォルダ：sozza
　　　バックアップスケジュール：毎日：1:00
　■バックアップローテーションを有効にする
④：to USB（単一バージョン）_NTFS
　バックアップ先タイプ：ローカルフォルダ＆USB（単一バージョン）
　バックアップタスクの作成
　　共有フォルダ：usbshare1
　バックアップするフォルダ：
　　backup
　　Documents
　　homes
　　 sottsa/佳紀以外とsottsa/佳紀配下のDownload,HDDリスト以外
　　music
　　photo
　　sozza
　　　Video以外
　タスク：to USB（単一バージョン）_NTFS
　ディレクトリ：nsozza_単一
　　　バックアップスケジュール：日曜日以外：2:00
　バックアップ時間：==5時間47分==(NTFS)初回
　　　　　　　　　　　　46分(NTFS)2回目
　　　　　　　　　　　　（1時間57分(exFAT)）　　　　　　　　　　
 →単一バージョンバックアップも、差分が大きいほど時間がかかる

Windowsで差分バックアップを参照・復元可能に
windowsに Hyper Backup Explorer をインストール
　[ダウンロードセンター - DS216j](https://www.synology.com/ja-jp/support/download/DS216j?version=6.2#utilities)でインストールファイルを取得
　③の tools 配下に、すべて展開
Hyper Backup Explorerの実行方法
　③をWindowsに接続後、展開したフォルダ内の、HyperBackupExplorer.exe を起動
　「ローカルバックアップを閲覧」をクリック
　③の差分フォルダ(*.hbk)内の、SynologyHyperBackup.bkpi を選択

以下のexFATのBackupは、削除！

==③：sozza差分Backup_exFAT==
　==バックアップ先タイプ：ローカルフォルダ＆USB==
　==バックアップタスクの作成==
　　==共有フォルダ：usbshare1==
　　==ディレクトリ　：nsozza_差分==
　==バックアップするフォルダ：sozza==
　　　==バックアップスケジュール：毎日：3:00==
　==■バックアップローテーションを有効にする==
差分Backupは、Windows11からファイル復元不可だったため、exFATにする必要なし！　
④：to USB（単一バージョン）_exFAT
　バックアップ先タイプ：ローカルフォルダ＆USB（単一バージョン）
　バックアップタスクの作成
　　共有フォルダ：usbshare1
　バックアップするフォルダ：
　　backup
　　Documents
　　music
　　photo
　　homes
　　 sottsa/佳紀以外とsottsa/佳紀配下のDownload,HDDリスト以外
　　sozza
　　　Video以外
　タスク：to USB（単一バージョン）_exFAT
　ディレクトリ：nsozza_単一
　バックアップ時間：1時間57分(exFAT)
→==④で以下がError==
　・Exception occurred while backing up data. [/volume1/backup/note/Obsidian/Import/SimpleNote/txt/🐧お知らせ🐧 Part 14.txt]
　・Exception occurred while backing up data. [/volume1/backup/note/Obsidian/Import/Notion/インポート(SimpleNote)/frost penguin 🐧🇯🇵🗼.md]

==★やはりexFATはいまいち★==
　使用できないファイル名が存在する：④エラー
　差分Backupは、Windows11からファイル復元不可なので、exFATにする必要なし
　安全な取り外し手順を実施しているはずだが、再接続時エラーが検出される
　
　Windows Error表示
　![[Pasted image 20241206123608.png]]
　Synology Error表示
　![[Pasted image 20241206125223.png]]

==LinkStationにBackupしたファイルを含むネットワークドライブ全部が見れない問題！==
→ポート:9000を指定するらしい。ただしWebアクセス
　http://192.168.11.250:9000/
　shareには、2020年の単身赴任から帰任した頃の玄箱データと、最新のsozzaの差分データが存在
　ただし、SMBでアクセスするには？？
　SynologyからrsyncでBackupした差分データは、以下にあるようだ
　　/share/nsozza_1.hbk
　単一バージョンは以下
　　/SynologyBackup
　とりあえず、ダウンロードはできる。複数ファイルはZip形式となる

　Linkstation をrsyncサーバにしてBackup
　Linkstationのバックアップパスワードは空白にする必要あり！？
　　参考：[BuffaloのNASをrsyncサーバとして使う - どねすの備忘録](https://rednes.hatenadiary.org/entry/20090806/1249516084)
　　参考２：[他のネットワーク対応ハードディスク（NAS）に商品のデータをバックアップする方法（LinkStation/旧商品） | バッファロー](https://www.buffalo.jp/support/faq/detail/5687.html)
　Linkstationのデータを取り出し
　　差分Backupをダウンロード(約5GB)は、うまく開けない
　　ダイレクトコピーを使ってみる
　　[LS710D0201/N : ネットワーク対応HDD(NAS) | バッファロー](https://www.buffalo.jp/product/detail/ls710d0201_n.html)
→Windows10/11では、SMB1が無効だった!!
　有効化手順：[【Linux NAS】Windows10、Windows11のPCからNASにアクセスできない場合の...](https://qa.elecom.co.jp/faq_detail.html?category=&id=7594)
　　大分試行錯誤した。。
→データを吸い上げて、LinkStationは使用停止
　rsyncで差分バックアップしたデータをusbshare2にコピーして、データ継続して新たなバックアップタスクを作ろうとしたが、「このフォルダには再リンクできません。このターゲットをrsync軽油で再リンクしてください」と出てタスク作成できなかった