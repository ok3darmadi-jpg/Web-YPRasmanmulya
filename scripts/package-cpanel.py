import os
import zipfile
import tarfile
import shutil
import time

def package_cpanel():
    dist_dir = 'dist'
    public_dir = 'public'
    os.makedirs(public_dir, exist_ok=True)
    os.makedirs(dist_dir, exist_ok=True)
    
    # Ensure .htaccess and htaccess.txt and instruction guide exist in dist and public
    htaccess_content = """<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
"""
    readme_content = """PETUNJUK UPLOAD WEBSITE KE CPANEL HOSTING (SMK & SMP RASMAN MULYA)
===================================================================

Isi paket ini:
1. index.html          -> Halaman utama website (React SPA)
2. assets/             -> Folder berisi file Javascript & CSS
3. .htaccess           -> Konfigurasi routing Apache (mencegah error 404 saat refresh)
4. htaccess.txt        -> Salinan dari .htaccess (jika Windows menyembunyikan file titik)

CARA MEMASANG DI CPANEL:
1. Buka cPanel Hosting Anda -> klik 'File Manager'.
2. Buka folder 'public_html'.
3. Jika sudah ada file index lama, Anda dapat menghapus atau memindahkannya ke folder backup.
4. Upload semua file (index.html, folder assets, dan .htaccess) langsung ke dalam public_html.
   CATATAN: Pastikan index.html berada langsung di dalam public_html, bukan di dalam subfolder baru.
5. Selesai! Buka domain website Anda di browser.
"""

    with open(os.path.join(dist_dir, '.htaccess'), 'w') as f:
        f.write(htaccess_content)
    with open(os.path.join(dist_dir, 'htaccess.txt'), 'w') as f:
        f.write(htaccess_content)
    with open(os.path.join(dist_dir, 'PETUNJUK_UPLOAD_CPANEL.txt'), 'w') as f:
        f.write(readme_content)

    with open(os.path.join(public_dir, '.htaccess'), 'w') as f:
        f.write(htaccess_content)
    with open(os.path.join(public_dir, 'htaccess.txt'), 'w') as f:
        f.write(htaccess_content)
    with open(os.path.join(public_dir, 'PETUNJUK_UPLOAD_CPANEL.txt'), 'w') as f:
        f.write(readme_content)

    zip_dist_path = os.path.join(dist_dir, 'website_siap_upload_cpanel.zip')
    tar_dist_path = os.path.join(dist_dir, 'website_siap_upload_cpanel.tar.gz')
    zip_public_path = os.path.join(public_dir, 'website_siap_upload_cpanel.zip')
    tar_public_path = os.path.join(public_dir, 'website_siap_upload_cpanel.tar.gz')

    now = time.localtime(time.time())[:6]

    # 1. Create standard cPanel AND Windows Explorer compatible ZIP
    # Key fix: Set both Unix permissions (upper 16 bits) AND MS-DOS attributes (lower byte).
    # Specifically, directory entries MUST have 0x10 (FILE_ATTRIBUTE_DIRECTORY) in low byte.
    # Without 0x10, Windows Explorer fails to extract directory structures!
    with zipfile.ZipFile(zip_dist_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        # First write directories with proper unix permissions + DOS directory flag (0x10)
        for root, dirs, files in os.walk(dist_dir):
            dirs.sort()
            for d in dirs:
                dirpath = os.path.join(root, d)
                rel_dir = os.path.relpath(dirpath, dist_dir).replace('\\', '/') + '/'
                zinfo = zipfile.ZipInfo(rel_dir, date_time=now)
                zinfo.create_system = 3 # Unix
                # Unix drwxr-xr-x (0o40755) + MS-DOS directory attribute (0x10)
                zinfo.external_attr = (0o40755 << 16) | 0x10
                zinfo.file_size = 0
                zf.writestr(zinfo, '')

            files.sort()
            for f in files:
                if f.endswith('.zip') or f.endswith('.tar.gz'):
                    continue
                filepath = os.path.join(root, f)
                arcname = os.path.relpath(filepath, dist_dir).replace('\\', '/')
                with open(filepath, 'rb') as fp:
                    data = fp.read()
                zinfo = zipfile.ZipInfo(arcname, date_time=now)
                zinfo.create_system = 3 # Unix
                # Unix -rw-r--r-- (0o100644) + MS-DOS archive attribute (0x20)
                zinfo.external_attr = (0o100644 << 16) | 0x20
                zinfo.compress_type = zipfile.ZIP_DEFLATED
                zf.writestr(zinfo, data)

    # 2. Create TAR.GZ for hosting that prefers tar.gz
    with tarfile.open(tar_dist_path, 'w:gz') as tf:
        for item in sorted(os.listdir(dist_dir)):
            if item.endswith('.zip') or item.endswith('.tar.gz'):
                continue
            item_path = os.path.join(dist_dir, item)
            tf.add(item_path, arcname=item)

    # Copy to public folder so dev server also serves them directly
    shutil.copy2(zip_dist_path, zip_public_path)
    shutil.copy2(tar_dist_path, tar_public_path)
    print("Successfully created cPanel packages: .zip and .tar.gz with Windows & Unix compatibility")

if __name__ == '__main__':
    package_cpanel()
