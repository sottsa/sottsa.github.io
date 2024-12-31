Ext2Fsdをインストールすればマウントできるはずだが、
  [徒然草: ext3ファイルシステムをWindows10で読み書き](https://hro-blog.blogspot.com/2016/02/ext3windows10.html)
以下の問題があるため、マウントに失敗する。
　metadata_csum,64bitオプションに対応していない
対処方法は、WSLでマウントするか
以下の方法
　[Ext2Fsd で ext4 パーティションをマウントできないとき #Windows - Qiita](https://qiita.com/safu9/items/42e977b8943c8d0837af)
　または
　[Linux のファイルを Windows から操作する - プログラミング系ブログ](https://dpcblog.hatenablog.com/entry/2020/02/18/194757)
いずれもLinux環境が必要!!