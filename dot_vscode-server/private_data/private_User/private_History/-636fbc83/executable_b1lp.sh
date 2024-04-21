### WSL Setup Script ###

# Update & Upgrade #
echo "------------------------------ Starting update & upgrade ------------------------------";
sudo apt update;
sudo apt upgrade -y;
echo "------------------------------ Done updating & upgrading ------------------------------";

# Setup ZSH #
echo "------------------------------ Setting up ZSH ------------------------------";
sudo apt install zsh -y;
chsh -s $(which zsh);
cd;
echo "------------------------------ Done setting up ZSH ------------------------------";

# Setup OhMyZSH #
echo "------------------------------ Setting up OhMyZSH ------------------------------";
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)";
cd;
echo "------------------------------ Done setting up ZSH ------------------------------";

# Setup OhMyZSH plugins #
echo "------------------------------ Setting up OhMyZSH plugins ------------------------------";
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/agkozak/zsh-z ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-z
cd;
echo "------------------------------ Setting up OhMyZSH plugins ------------------------------";


# Setup up Starship #
echo "------------------------------ Setting up Starship ------------------------------";
curl -sS https://starship.rs/install.sh | sh;
cd;
echo "------------------------------ Done setting up Starship ------------------------------";

# Setup up Azure CLI #
echo "------------------------------ Setting up Azure CLI ------------------------------";
sudo apt install ca-certificates curl apt-transport-https lsb-release gnupg -y;
curl -sL https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/microsoft.gpg > /dev/null;
AZ_REPO=$(lsb_release -cs);
echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/trusted.gpg.d/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list;
sudo apt update;
sudo apt install azure-cli -y;
az login;
echo "------------------------------ Done setting up Azure CLI ------------------------------";

# Setup ChezMoi
echo "------------------------------ Setting up ChezMoi ------------------------------";
cd /;
sudo sh -c "$(curl -fsLS get.chezmoi.io)";
/bin/chezmoi init https://github.com/TCRK-Configurations/TCRK-Configurations-WSL_DotFiles.git
/bin/chezmoi update;
cd;
echo "------------------------------ Done setting up ChezMoi ------------------------------";

# Generate GitHub SSH key #
echo "------------------------------ Generating a new SSH key pair ------------------------------";
mkdir .ssh;
ssh-keygen -t ed25519 -C "113133099+TheCosyRedKoala@users.noreply.github.com" -f .ssh/github_personal;
eval "$(ssh-agent -s)";
ssh-add .ssh/github_personal;
cat .ssh/github_personal.pub;
cd;
echo "------------------------------ Done generating a new SSH key pair ------------------------------";

# Setting the DotFiles repo to SSH
echo "------------------------------ Setting the DotFiles repo to SSH ------------------------------";
cd .local/share/chezmoi/;
git remote remove origin;
git remote add origin git@github.com:TCRK-Configurations/TCRK-Configurations-WSL_DotFiles.git;
cd;
echo "------------------------------ Done setting the DotFiles repo to SSH ------------------------------";