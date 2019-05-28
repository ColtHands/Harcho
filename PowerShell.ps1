echo "wasup"

# $folder = "C:\Users\LOCAL_~1\AppData\Local\Temp\3"
# $filter = "*.LOG"
# $Watcher = New-Object IO.FileSystemWatcher $folder, $filter -Property @{ 
#     IncludeSubdirectories = $false
#     NotifyFilter = [IO.NotifyFilters]'FileName, LastWrite'
# }
# $onCreated = Register-ObjectEvent $Watcher Created -SourceIdentifier FileCreated -Action {
#    $path = $Event.SourceEventArgs.FullPath
#    $name = $Event.SourceEventArgs.Name
#    $changeType = $Event.SourceEventArgs.ChangeType
#    $timeStamp = $Event.TimeGenerated
#    Write-Host "The file '$name' was $changeType at $timeStamp"
#    Write-Host $path
#    #Move-Item $path -Destination $destination -Force -Verbose
# }