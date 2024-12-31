2024/10/13 Serfaceにインストールしてみたが、タブレットモード、タッチスクリーンが動作しないので、Windows10の代わりにはできない
スリープ後固まる(復帰しない)のが致命的！

・インストール手順概要
１．ChromeOS Flex イメージを使用して USB インストーラを作成します。
２．USBインストーラーを使用してデバイスを起動します。
３．ChromeOS Flex をデバイスにインストールします。
　　または、USB インストーラを使用して**ChromeOS Flex を一時的に実行**します。
４．ChromeOS Flex デバイスを設定して登録します。

事前準備
・8GB以上のUSBメモリを準備
・誤って元のWindowsを消してしまった際にリカバリできるように回復ドライブを作成しておいたほうが良い

手順詳細
・USBにChromeOS Flexの起動ドライブを作成
　以下で申請して、インストール方法とインストールイメージを取得
　[ChromeOS Flex: Google のクラウドベースのオペレーティング システム - ChromeOS](https://chromeos.google/intl/ja_jp/products/chromeos-flex/)

　以下が上記の延長で表示されたページ
　[ChromeOS Flex インストール ガイド](https://support.google.com/chromeosflex/answer/11541904?sjid=13195277832979143885-AP)

・以下からインストールイメージを直接ダウンロードしてツールでUSBに書き込む方法もある
　[ChromeOS Flex インストーラ イメージ](https://dl.google.com/chromeos-flex/images/latest.bin.zip)
　ツールとしては、上記の手順で使用する、Chrome ブラウザの拡張機能：Chrome Recovery Utilityでも可能だが、[Rufus](https://rufus.ie/ja/)でも可能

・USBから起動するように設定
　以下を参考にブート順を変更する
　[USB デバイスから Surface を起動する - Microsoft サポート](https://support.microsoft.com/ja-jp/surface/usb-%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%8B%E3%82%89-surface-%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B-fe7a7323-8d1d-823d-be17-9aec89c4f9f5)

・起動時以下のメッセージ(security policy violation)が出たら、BIOSを非UEFIモードに変更
　「Verifiying shim SBAT data failed: Security Policy Violation 
　Something has gone seriously wrong: SBAT self-check failed; Security Policy Violation」
　
　非UEFIモードに変更するには以下
　 [WindowsとUbuntuをデュアルブートしてるPC(SSD)で、Ubuntuの起動時に SBAT self-check failed:Security Policy Vioration のエラーが出てしまう際の解決策 #Linux - Qiita](https://qiita.com/yutorimatsugami/items/fd015175258487825e98)
　　[この現象の解決方法](https://qiita.com/yutorimatsugami/items/fd015175258487825e98)

・起動時、"ChromeOS Flex の使用を開始する" 画面で、"**まず試す**"をクリックします

・起動後、タブレットモード、タッチスクリーンが動作しないのは、現状未サポートのようだ。。

・元のWindowsを起動した際に、BitLockerで回復キーを求められる場合がある
　回復キー確認方法：以下のページにMicrosoftアカウントでログイン
　https://account.microsoft.com/devices/recoverykey


・ChromeOS FlexとWindowsのマルチブート環境を作る→かなりムズい
　[ChromeOS FlexとWindowsやmacOS等のマルチブート環境を作る #UEFI - Qiita](https://qiita.com/belgianbeer/items/b638c12150dc86911922)

　HDD/SDDを2台内蔵できれば以下の方法で可能
　[ChromeOS FlexとWindows11のデュアルブートを実現してみる。｜ぱるちゃん (note.com)](https://note.com/paru877/n/n8becab51d690)
　①PCのディスク（ディスク1とする）に先にWindowsをインストールする  
　②**ディスク1を外す**  
　③**別のディスク（ディスク2とする）をPCに装着する**  
　④ディスク2にChromeOS Flexをインストールする  
　⑤PCにディスク1と2両方を装着する  
　⑥Boot optionでどちらを起動するかを選ぶ