OPPO通信不可

発生条件：
OPPOでDoCoMo系NVMOを使用した場合、突然通信不可となり、復旧には電源OFF/ONが必要

以下で改善するかも
https://bbs.kakaku.com/bbs/J0000031535/SortID=23457473/
★まとめ
・初期化
・APNの不要な内容削除（他simの設定削除。1個しか無い状態）
・MVNOの種類を「SPN」に変更
・APNのタイプを「default,supl,dun」から「default,supl,ia,ims」に変更

8/19 19時頃発生したため
8/19 22時以下の変更を実施
・MVNOの種類を「なし」から「SPN」に変更
上記設定により、他のAPN設定が、見えなくなった！
その他の設定にしても、同様の変化だったが、「ICCID」に
した際、LinksMateのAPNが削除された！！

8/29 18:50再起動

2021/6/12 交換後のReno A
事象:上記と同等
設定:APN=spmode.ne.jpのみ
トライ1:MVNOの種類を「なし」から「SPN」に変更
   効果→不明
   影響→他のAPN設定が、見えなくなる
トライ2:APNのタイプを「default,supl,dun」から「default,supl,ia,ims」に変更
   効果→不明
   影響→不明

6/12 9:45 トライ2のみ




Tags:
  環境