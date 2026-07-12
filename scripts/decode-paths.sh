#!/bin/bash
# URL-encoded 디렉토리/파일명을 한글로 디코딩

decode_percent() {
  printf '%b' "${1//%/\\x}"
}

find out -depth -name '*%*' | while IFS= read -r path; do
  dir=$(dirname "$path")
  name=$(basename "$path")
  decoded=$(decode_percent "$name")
  if [ "$name" != "$decoded" ]; then
    mv "$path" "$dir/$decoded"
  fi
done

echo "✓ URL-encoded paths decoded"
