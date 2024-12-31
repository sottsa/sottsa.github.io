SIMカードの交換方法
iPhone設定
　「Safari」でSIMカード提供業者のページ等から、APN構成プロファイルをダウンロード
　SIMカードを入れ替える
　「設定」を開き、〔プロファイルがダウンロードされました〕をタップ
　[インストール]をタップ

iPhoneキャリア(DoCoMo,au等)に戻す
　以下の操作でAPN構成プロファイルを削除する
　　「設定」→「一般」→「プロファイル」を開き
　　SIM業者等を選択後、「削除」をタップ

Android
　SIMカード提供業者の提供情報に基づきAPNを設定する
　「設定」-「接続」-「モバイルネットワーク」-「APN」
　[追加]

・iPhoneでAPN設定(インストール)した後、元に戻す場合は、削除が必要
APN構成プロファイルの削除方法
https://www.teach-me.biz/sim/iphone/delete-apn-profile.html
------
iPhoneを格安SIMで使用するときは、MVNOが提供するAPN構成プロファイルをインストールするのが一般的です。iPhoneはAndroidと違い、複数のAPN設定を保存し、それらを切り替えて使うことができません。

従って、一台のiPhoneで複数の格安SIMを使い分けて使用する際は、その都度、APN構成プロファイルを削除して新たなプロファイルを入れ直さなければなりません。
------


--------------
mineo:
　iPhone：https://support.mineo.jp/setup/guide/ios_network.html
                  iCloud Drive\APN\mineo-d1
　　　　　OneDrive\ドキュメント\環境\iPhone\mineo(D) APN構成プロファイル
　その他：
    名前    	        任意の名前
    APN	        mineo-d.jp
    ユーザー名	mineo@k-opti.com
    パスワード	mineo
    認証タイプ	CHAP

IIJ:
　iPhone：https://www.iijmio.jp/hdd/devices/config.jsp
　　　　　iCloud Drive\APN\iijmio-cellular
　　　　　OneDrive\ドキュメント\環境\iPhone\IIJmio APN構成プロファイル
　その他：
　APN	　　iijmio.jp
　ユーザ名	mio@iij
　パスワード	iij
　認証タイプ	PAPまたはCHAP

au APN
LTE NETのAPN設定方法
代表的な設定項目名	設定値
アクセスポイント名	任意の名前
APN	uno.au-net.ne.jp
ユーザー名	685840734641020@uno.au-net.ne.jp
パスワード	KpyrR6BP
認証タイプ	CHAP
APNタイプ	default,supl,mms,hipri

Tags:
  情報, 環境