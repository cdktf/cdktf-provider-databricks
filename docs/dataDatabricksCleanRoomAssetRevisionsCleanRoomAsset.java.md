# `dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset` Submodule <a name="`dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset databricks_clean_room_asset_revisions_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetType(java.lang.String)
    .name(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .foreignTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails)
//  .notebook(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook)
//  .table(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable)
//  .tableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails)
//  .view(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView)
//  .viewLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails)
//  .workspaceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.assetType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.cleanRoomName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.foreignTable"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.tableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.viewLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.volumeLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#volume_local_details}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTable">putForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTableLocalDetails">putForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putNotebook">putNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTable">putTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTableLocalDetails">putTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putView">putView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putViewLocalDetails">putViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putVolumeLocalDetails">putVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetForeignTable">resetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetForeignTableLocalDetails">resetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetNotebook">resetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetTableLocalDetails">resetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetView">resetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetViewLocalDetails">resetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetVolumeLocalDetails">resetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putForeignTable` <a name="putForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTable"></a>

```java
public void putForeignTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a>

---

##### `putForeignTableLocalDetails` <a name="putForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTableLocalDetails"></a>

```java
public void putForeignTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a>

---

##### `putNotebook` <a name="putNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putNotebook"></a>

```java
public void putNotebook(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a>

---

##### `putTable` <a name="putTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTable"></a>

```java
public void putTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a>

---

##### `putTableLocalDetails` <a name="putTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTableLocalDetails"></a>

```java
public void putTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a>

---

##### `putView` <a name="putView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putView"></a>

```java
public void putView(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a>

---

##### `putViewLocalDetails` <a name="putViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putViewLocalDetails"></a>

```java
public void putViewLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a>

---

##### `putVolumeLocalDetails` <a name="putVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putVolumeLocalDetails"></a>

```java
public void putVolumeLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a>

---

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetCleanRoomName"></a>

```java
public void resetCleanRoomName()
```

##### `resetForeignTable` <a name="resetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetForeignTable"></a>

```java
public void resetForeignTable()
```

##### `resetForeignTableLocalDetails` <a name="resetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetForeignTableLocalDetails"></a>

```java
public void resetForeignTableLocalDetails()
```

##### `resetNotebook` <a name="resetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetNotebook"></a>

```java
public void resetNotebook()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetTable"></a>

```java
public void resetTable()
```

##### `resetTableLocalDetails` <a name="resetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetTableLocalDetails"></a>

```java
public void resetTableLocalDetails()
```

##### `resetView` <a name="resetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetView"></a>

```java
public void resetView()
```

##### `resetViewLocalDetails` <a name="resetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetViewLocalDetails"></a>

```java
public void resetViewLocalDetails()
```

##### `resetVolumeLocalDetails` <a name="resetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetVolumeLocalDetails"></a>

```java
public void resetVolumeLocalDetails()
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.resetWorkspaceId"></a>

```java
public void resetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.addedAt">addedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.ownerCollaboratorAlias">ownerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableInput">foreignTableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableLocalDetailsInput">foreignTableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.notebookInput">notebookInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableInput">tableInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableLocalDetailsInput">tableLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewInput">viewInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewLocalDetailsInput">viewLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.volumeLocalDetailsInput">volumeLocalDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.assetType">assetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `addedAt`<sup>Required</sup> <a name="addedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.addedAt"></a>

```java
public java.lang.Number getAddedAt();
```

- *Type:* java.lang.Number

---

##### `foreignTable`<sup>Required</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTable"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference</a>

---

##### `foreignTableLocalDetails`<sup>Required</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.notebook"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference</a>

---

##### `ownerCollaboratorAlias`<sup>Required</sup> <a name="ownerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.ownerCollaboratorAlias"></a>

```java
public java.lang.String getOwnerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.table"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference</a>

---

##### `tableLocalDetails`<sup>Required</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.view"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference</a>

---

##### `viewLocalDetails`<sup>Required</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `volumeLocalDetails`<sup>Required</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.volumeLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.assetTypeInput"></a>

```java
public java.lang.String getAssetTypeInput();
```

- *Type:* java.lang.String

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cleanRoomNameInput"></a>

```java
public java.lang.String getCleanRoomNameInput();
```

- *Type:* java.lang.String

---

##### `foreignTableInput`<sup>Optional</sup> <a name="foreignTableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableInput"></a>

```java
public java.lang.Object getForeignTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a>

---

##### `foreignTableLocalDetailsInput`<sup>Optional</sup> <a name="foreignTableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```java
public java.lang.Object getForeignTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `notebookInput`<sup>Optional</sup> <a name="notebookInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.notebookInput"></a>

```java
public java.lang.Object getNotebookInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a>

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableInput"></a>

```java
public java.lang.Object getTableInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a>

---

##### `tableLocalDetailsInput`<sup>Optional</sup> <a name="tableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tableLocalDetailsInput"></a>

```java
public java.lang.Object getTableLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewInput"></a>

```java
public java.lang.Object getViewInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a>

---

##### `viewLocalDetailsInput`<sup>Optional</sup> <a name="viewLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.viewLocalDetailsInput"></a>

```java
public java.lang.Object getViewLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a>

---

##### `volumeLocalDetailsInput`<sup>Optional</sup> <a name="volumeLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.volumeLocalDetailsInput"></a>

```java
public java.lang.Object getVolumeLocalDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .assetType(java.lang.String)
    .name(java.lang.String)
//  .cleanRoomName(java.lang.String)
//  .foreignTable(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable)
//  .foreignTableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails)
//  .notebook(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook)
//  .table(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable)
//  .tableLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails)
//  .view(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView)
//  .viewLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails)
//  .volumeLocalDetails(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails)
//  .workspaceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.assetType">assetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.cleanRoomName">cleanRoomName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.foreignTable">foreignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.foreignTableLocalDetails">foreignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.tableLocalDetails">tableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.viewLocalDetails">viewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.volumeLocalDetails">volumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.assetType"></a>

```java
public java.lang.String getAssetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#asset_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.cleanRoomName"></a>

```java
public java.lang.String getCleanRoomName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#clean_room_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#clean_room_name}.

---

##### `foreignTable`<sup>Optional</sup> <a name="foreignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.foreignTable"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable getForeignTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table}.

---

##### `foreignTableLocalDetails`<sup>Optional</sup> <a name="foreignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails getForeignTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.notebook"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook getNotebook();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.table"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable getTable();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table}.

---

##### `tableLocalDetails`<sup>Optional</sup> <a name="tableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.tableLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails getTableLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#table_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.view"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView getView();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view}.

---

##### `viewLocalDetails`<sup>Optional</sup> <a name="viewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.viewLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails getViewLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#view_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#view_local_details}.

---

##### `volumeLocalDetails`<sup>Optional</sup> <a name="volumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.volumeLocalDetails"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails getVolumeLocalDetails();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#volume_local_details DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#volume_local_details}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#workspace_id DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#workspace_id}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable.builder()
    .build();
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.builder()
    .notebookContent(java.lang.String)
//  .runnerCollaboratorAliases(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#runner_collaborator_aliases}. |

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#notebook_content DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#notebook_content}.

---

##### `runnerCollaboratorAliases`<sup>Optional</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.builder()
//  .comment(java.lang.String)
//  .createdAtMillis(java.lang.Number)
//  .reviewerCollaboratorAlias(java.lang.String)
//  .reviewState(java.lang.String)
//  .reviewSubReason(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}.

---

##### `createdAtMillis`<sup>Optional</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#created_at_millis DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#created_at_millis}.

---

##### `reviewerCollaboratorAlias`<sup>Optional</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#reviewer_collaborator_alias}.

---

##### `reviewState`<sup>Optional</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_state DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_state}.

---

##### `reviewSubReason`<sup>Optional</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#review_sub_reason DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable.builder()
    .build();
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.builder()
    .localName(java.lang.String)
//  .partitions(IResolvable)
//  .partitions(java.util.List<DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.property.partitions">partitions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partitions}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails.property.partitions"></a>

```java
public java.lang.Object getPartitions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partitions DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partitions}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions.builder()
//  .value(IResolvable)
//  .value(java.util.List<DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions.property.value">value</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```java
public java.lang.Object getValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.builder()
//  .name(java.lang.String)
//  .op(java.lang.String)
//  .recipientPropertyKey(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#op DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#op}.

---

##### `recipientPropertyKey`<sup>Optional</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#recipient_property_key DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#value DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView.builder()
    .build();
```


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.builder()
//  .comment(java.lang.String)
//  .mask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask)
//  .name(java.lang.String)
//  .nullable(java.lang.Boolean)
//  .nullable(IResolvable)
//  .partitionIndex(java.lang.Number)
//  .position(java.lang.Number)
//  .typeIntervalType(java.lang.String)
//  .typeJson(java.lang.String)
//  .typeName(java.lang.String)
//  .typePrecision(java.lang.Number)
//  .typeScale(java.lang.Number)
//  .typeText(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.position">position</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeName">typeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeText">typeText</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#comment DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#mask DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#nullable DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#nullable}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#partition_index DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#position DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#position}.

---

##### `typeIntervalType`<sup>Optional</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_interval_type DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_interval_type}.

---

##### `typeJson`<sup>Optional</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_json DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_json}.

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_name}.

---

##### `typePrecision`<sup>Optional</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_precision DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_precision}.

---

##### `typeScale`<sup>Optional</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_scale DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_scale}.

---

##### `typeText`<sup>Optional</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#type_text DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.builder()
//  .functionName(java.lang.String)
//  .usingColumnNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.property.functionName">functionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}. |

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#function_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#function_name}.

---

##### `usingColumnNames`<sup>Optional</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#using_column_names DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails;

DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails.builder()
    .localName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails.property.localName">localName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}. |

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/data-sources/clean_room_asset_revisions_clean_room_asset#local_name DataDatabricksCleanRoomAssetRevisionsCleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableLocalDetails</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetForeignTable</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">resetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRunnerCollaboratorAliases` <a name="resetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```java
public void resetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.notebookContentInput">notebookContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">runnerCollaboratorAliasesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.notebookContent">notebookContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">runnerCollaboratorAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.reviews"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList getReviews();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList</a>

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `notebookContentInput`<sup>Optional</sup> <a name="notebookContentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```java
public java.lang.String getNotebookContentInput();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliasesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `notebookContent`<sup>Required</sup> <a name="notebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```java
public java.lang.String getNotebookContent();
```

- *Type:* java.lang.String

---

##### `runnerCollaboratorAliases`<sup>Required</sup> <a name="runnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```java
public java.util.List<java.lang.String> getRunnerCollaboratorAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebook</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">resetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">resetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewState">resetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">resetReviewSubReason</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetCreatedAtMillis` <a name="resetCreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```java
public void resetCreatedAtMillis()
```

##### `resetReviewerCollaboratorAlias` <a name="resetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```java
public void resetReviewerCollaboratorAlias()
```

##### `resetReviewState` <a name="resetReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```java
public void resetReviewState()
```

##### `resetReviewSubReason` <a name="resetReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```java
public void resetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">createdAtMillisInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewerCollaboratorAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">reviewStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">reviewSubReasonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">createdAtMillis</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewerCollaboratorAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewState">reviewState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">reviewSubReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `createdAtMillisInput`<sup>Optional</sup> <a name="createdAtMillisInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```java
public java.lang.Number getCreatedAtMillisInput();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="reviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```java
public java.lang.String getReviewerCollaboratorAliasInput();
```

- *Type:* java.lang.String

---

##### `reviewStateInput`<sup>Optional</sup> <a name="reviewStateInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```java
public java.lang.String getReviewStateInput();
```

- *Type:* java.lang.String

---

##### `reviewSubReasonInput`<sup>Optional</sup> <a name="reviewSubReasonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```java
public java.lang.String getReviewSubReasonInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdAtMillis`<sup>Required</sup> <a name="createdAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```java
public java.lang.Number getCreatedAtMillis();
```

- *Type:* java.lang.Number

---

##### `reviewerCollaboratorAlias`<sup>Required</sup> <a name="reviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```java
public java.lang.String getReviewerCollaboratorAlias();
```

- *Type:* java.lang.String

---

##### `reviewState`<sup>Required</sup> <a name="reviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```java
public java.lang.String getReviewState();
```

- *Type:* java.lang.String

---

##### `reviewSubReason`<sup>Required</sup> <a name="reviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```java
public java.lang.String getReviewSubReason();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.putPartitions">putPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">resetPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitions` <a name="putPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```java
public void putPartitions(IResolvable OR java.util.List<DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `resetPartitions` <a name="resetPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```java
public void resetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">partitionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList getPartitions();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `partitionsInput`<sup>Optional</sup> <a name="partitionsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```java
public java.lang.Object getPartitionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>>

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetails</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```java
public void putValue(IResolvable OR java.util.List<DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">valueInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList getValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```java
public java.lang.Object getValueInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitions</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">resetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">resetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetOp` <a name="resetOp" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```java
public void resetOp()
```

##### `resetRecipientPropertyKey` <a name="resetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```java
public void resetRecipientPropertyKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">opInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipientPropertyKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipientPropertyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `opInput`<sup>Optional</sup> <a name="opInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```java
public java.lang.String getOpInput();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKeyInput`<sup>Optional</sup> <a name="recipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```java
public java.lang.String getRecipientPropertyKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```java
public java.lang.String getOp();
```

- *Type:* java.lang.String

---

##### `recipientPropertyKey`<sup>Required</sup> <a name="recipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```java
public java.lang.String getRecipientPropertyKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableLocalDetailsPartitionsValue</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTableOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetTable</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.get"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns</a>>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">resetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">resetUsingColumnNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionName` <a name="resetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```java
public void resetFunctionName()
```

##### `resetUsingColumnNames` <a name="resetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```java
public void resetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">usingColumnNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.functionName">functionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">usingColumnNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```java
public java.lang.String getFunctionNameInput();
```

- *Type:* java.lang.String

---

##### `usingColumnNamesInput`<sup>Optional</sup> <a name="usingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```java
public java.lang.String getFunctionName();
```

- *Type:* java.lang.String

---

##### `usingColumnNames`<sup>Required</sup> <a name="usingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```java
public java.util.List<java.lang.String> getUsingColumnNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.putMask">putMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetMask">resetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">resetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeJson">resetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeName">resetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypePrecision">resetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeScale">resetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeText">resetTypeText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMask` <a name="putMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.putMask"></a>

```java
public void putMask(DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetMask` <a name="resetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```java
public void resetMask()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```java
public void resetPartitionIndex()
```

##### `resetPosition` <a name="resetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetTypeIntervalType` <a name="resetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```java
public void resetTypeIntervalType()
```

##### `resetTypeJson` <a name="resetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```java
public void resetTypeJson()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```java
public void resetTypeName()
```

##### `resetTypePrecision` <a name="resetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```java
public void resetTypePrecision()
```

##### `resetTypeScale` <a name="resetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```java
public void resetTypeScale()
```

##### `resetTypeText` <a name="resetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```java
public void resetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.maskInput">maskInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">partitionIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">typeIntervalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">typeJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">typePrecisionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">typeScaleInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeTextInput">typeTextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.partitionIndex">partitionIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.position">position</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">typeIntervalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeJson">typeJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typePrecision">typePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeScale">typeScale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeText">typeText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference getMask();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `maskInput`<sup>Optional</sup> <a name="maskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```java
public java.lang.Object getMaskInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsMask</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```java
public java.lang.Object getNullableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```java
public java.lang.Number getPartitionIndexInput();
```

- *Type:* java.lang.Number

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```java
public java.lang.Number getPositionInput();
```

- *Type:* java.lang.Number

---

##### `typeIntervalTypeInput`<sup>Optional</sup> <a name="typeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```java
public java.lang.String getTypeIntervalTypeInput();
```

- *Type:* java.lang.String

---

##### `typeJsonInput`<sup>Optional</sup> <a name="typeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```java
public java.lang.String getTypeJsonInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `typePrecisionInput`<sup>Optional</sup> <a name="typePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```java
public java.lang.Number getTypePrecisionInput();
```

- *Type:* java.lang.Number

---

##### `typeScaleInput`<sup>Optional</sup> <a name="typeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```java
public java.lang.Number getTypeScaleInput();
```

- *Type:* java.lang.Number

---

##### `typeTextInput`<sup>Optional</sup> <a name="typeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```java
public java.lang.String getTypeTextInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```java
public java.lang.Object getNullable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```java
public java.lang.Number getPartitionIndex();
```

- *Type:* java.lang.Number

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.position"></a>

```java
public java.lang.Number getPosition();
```

- *Type:* java.lang.Number

---

##### `typeIntervalType`<sup>Required</sup> <a name="typeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```java
public java.lang.String getTypeIntervalType();
```

- *Type:* java.lang.String

---

##### `typeJson`<sup>Required</sup> <a name="typeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```java
public java.lang.String getTypeJson();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

##### `typePrecision`<sup>Required</sup> <a name="typePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```java
public java.lang.Number getTypePrecision();
```

- *Type:* java.lang.Number

---

##### `typeScale`<sup>Required</sup> <a name="typeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```java
public java.lang.Number getTypeScale();
```

- *Type:* java.lang.Number

---

##### `typeText`<sup>Required</sup> <a name="typeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```java
public java.lang.String getTypeText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumns</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewLocalDetails</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.columns"></a>

```java
public DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList getColumns();
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetViewOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetView</a>

---


### DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.data_databricks_clean_room_asset_revisions_clean_room_asset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference;

new DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">localNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">localName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localNameInput`<sup>Optional</sup> <a name="localNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```java
public java.lang.String getLocalNameInput();
```

- *Type:* java.lang.String

---

##### `localName`<sup>Required</sup> <a name="localName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```java
public java.lang.String getLocalName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssetRevisionsCleanRoomAsset.DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetRevisionsCleanRoomAssetVolumeLocalDetails</a>

---



