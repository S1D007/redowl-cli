#!/bin/bash

display_disk_usage() {
    echo "Disk usage before cleanup:"
    df -h /
}

clear_cache() {
    echo "Clearing system cache..."
    sudo sync; sudo sysctl -w vm.drop_caches=3
}

remove_packages() {
    echo "Removing unnecessary packages..."
    sudo apt-get autoremove -y
    sudo apt-get clean
}

clean_temp_files() {
    echo "Cleaning temporary files..."
    sudo rm -rf /tmp/*
    sudo rm -rf /var/tmp/*
}

clear_logs() {
    echo "Clearing log files..."
    sudo find /var/log -type f -name "*.log" -exec truncate -s 0 {} \;
}

display_summary() {
    echo "Disk usage after cleanup:"
    df -h /
}

# Main script execution
display_disk_usage
clear_cache
remove_packages
clean_temp_files
clear_logs
display_summary

echo "Cleanup completed successfully."
