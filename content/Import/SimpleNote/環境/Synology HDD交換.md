Synology HDD交換

Synology DS216j が、再接続時(PC起動後)「見つからない」、と出てくる
2021年1月のHDD交換前には発生していなかったようなので、交換したHDDの問題の可能性あり

交換したHDD：WD Red 4TB
　SMRだった

交換用HDD： ST4000VN008 (Seagate)

交換手順：
ストレージ容量を拡張するために Drive を交換する
https://kb.synology.com/ja-jp/DSM/help/DSM/StorageManager/storage_pool_expand_replace_disk?version=6

概要
１．[ストレージ マネージャ] を起動します。
２．[ストレージ プール] に進み、一番小さいドライブを確認してください。
　　ドライブ１
３．Synology NAS の電源を切ります。
　　 DS216j は、ホットスワップ未対応
４．既存のドライブのうち最も小さい物を取り外し、新しい大きいドライブを装着してください。
　　ドライブ１を取り外し、ST4000VN008 を装着
５．Synology NAS の電源を入れます。
６．[ストレージ マネージャ] を再度開きます。
７．ストレージ プール： [劣化]→ [アクション]ドロップダウンメニューから [修理]
８．交換するドライブを選択してストレージ プールを増設します。
９．ドライブ２に対して、３．から８．を実施

Tags:
  環境