branch=$(git symbolic-ref HEAD 2> /dev/null | awk 'BEGIN{FS="/"} {print $NF}')
if [[ $branch == "" ]]; then
  :
else
  echo $branch
fi
