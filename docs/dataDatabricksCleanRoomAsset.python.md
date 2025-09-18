# `dataDatabricksCleanRoomAsset` Submodule <a name="`dataDatabricksCleanRoomAsset` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAsset <a name="DataDatabricksCleanRoomAsset" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  name: str,
  clean_room_name: str = None,
  foreign_table: DataDatabricksCleanRoomAssetForeignTable = None,
  foreign_table_local_details: DataDatabricksCleanRoomAssetForeignTableLocalDetails = None,
  notebook: DataDatabricksCleanRoomAssetNotebook = None,
  table: DataDatabricksCleanRoomAssetTable = None,
  table_local_details: DataDatabricksCleanRoomAssetTableLocalDetails = None,
  view: DataDatabricksCleanRoomAssetView = None,
  view_local_details: DataDatabricksCleanRoomAssetViewLocalDetails = None,
  volume_local_details: DataDatabricksCleanRoomAssetVolumeLocalDetails = None,
  workspace_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.assetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.cleanRoomName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}.

---

##### `foreign_table`<sup>Optional</sup> <a name="foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTable"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}.

---

##### `foreign_table_local_details`<sup>Optional</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.foreignTableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.notebook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}.

---

##### `table_local_details`<sup>Optional</sup> <a name="table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.tableLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}.

---

##### `view_local_details`<sup>Optional</sup> <a name="view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.viewLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}.

---

##### `volume_local_details`<sup>Optional</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.volumeLocalDetails"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable">put_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails">put_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook">put_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails">put_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails">put_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails">put_volume_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName">reset_clean_room_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable">reset_foreign_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails">reset_foreign_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook">reset_notebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails">reset_table_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView">reset_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails">reset_view_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails">reset_volume_local_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_foreign_table` <a name="put_foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTable"></a>

```python
def put_foreign_table() -> None
```

##### `put_foreign_table_local_details` <a name="put_foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails"></a>

```python
def put_foreign_table_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putForeignTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `put_notebook` <a name="put_notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook"></a>

```python
def put_notebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
) -> None
```

###### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook.parameter.notebookContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}.

---

###### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putNotebook.parameter.runnerCollaboratorAliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}.

---

##### `put_table` <a name="put_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTable"></a>

```python
def put_table() -> None
```

##### `put_table_local_details` <a name="put_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails"></a>

```python
def put_table_local_details(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]] = None
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

###### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putTableLocalDetails.parameter.partitions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}.

---

##### `put_view` <a name="put_view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putView"></a>

```python
def put_view() -> None
```

##### `put_view_local_details` <a name="put_view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails"></a>

```python
def put_view_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putViewLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `put_volume_local_details` <a name="put_volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails"></a>

```python
def put_volume_local_details(
  local_name: str
) -> None
```

###### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.putVolumeLocalDetails.parameter.localName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `reset_clean_room_name` <a name="reset_clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetCleanRoomName"></a>

```python
def reset_clean_room_name() -> None
```

##### `reset_foreign_table` <a name="reset_foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTable"></a>

```python
def reset_foreign_table() -> None
```

##### `reset_foreign_table_local_details` <a name="reset_foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetForeignTableLocalDetails"></a>

```python
def reset_foreign_table_local_details() -> None
```

##### `reset_notebook` <a name="reset_notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetNotebook"></a>

```python
def reset_notebook() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_table_local_details` <a name="reset_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetTableLocalDetails"></a>

```python
def reset_table_local_details() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetView"></a>

```python
def reset_view() -> None
```

##### `reset_view_local_details` <a name="reset_view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetViewLocalDetails"></a>

```python
def reset_view_local_details() -> None
```

##### `reset_volume_local_details` <a name="reset_volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetVolumeLocalDetails"></a>

```python
def reset_volume_local_details() -> None
```

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCleanRoomAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt">added_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias">owner_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput">asset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput">clean_room_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput">foreign_table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput">foreign_table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput">notebook_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput">table_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput">view_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput">view_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput">volume_local_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `added_at`<sup>Required</sup> <a name="added_at" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.addedAt"></a>

```python
added_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `foreign_table`<sup>Required</sup> <a name="foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTable"></a>

```python
foreign_table: DataDatabricksCleanRoomAssetForeignTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference">DataDatabricksCleanRoomAssetForeignTableOutputReference</a>

---

##### `foreign_table_local_details`<sup>Required</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `notebook`<sup>Required</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebook"></a>

```python
notebook: DataDatabricksCleanRoomAssetNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference">DataDatabricksCleanRoomAssetNotebookOutputReference</a>

---

##### `owner_collaborator_alias`<sup>Required</sup> <a name="owner_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.ownerCollaboratorAlias"></a>

```python
owner_collaborator_alias: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.table"></a>

```python
table: DataDatabricksCleanRoomAssetTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference">DataDatabricksCleanRoomAssetTableOutputReference</a>

---

##### `table_local_details`<sup>Required</sup> <a name="table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetails"></a>

```python
table_local_details: DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.view"></a>

```python
view: DataDatabricksCleanRoomAssetViewOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference">DataDatabricksCleanRoomAssetViewOutputReference</a>

---

##### `view_local_details`<sup>Required</sup> <a name="view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetails"></a>

```python
view_local_details: DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `volume_local_details`<sup>Required</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetails"></a>

```python
volume_local_details: DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `asset_type_input`<sup>Optional</sup> <a name="asset_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetTypeInput"></a>

```python
asset_type_input: str
```

- *Type:* str

---

##### `clean_room_name_input`<sup>Optional</sup> <a name="clean_room_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomNameInput"></a>

```python
clean_room_name_input: str
```

- *Type:* str

---

##### `foreign_table_input`<sup>Optional</sup> <a name="foreign_table_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableInput"></a>

```python
foreign_table_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>]

---

##### `foreign_table_local_details_input`<sup>Optional</sup> <a name="foreign_table_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```python
foreign_table_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notebook_input`<sup>Optional</sup> <a name="notebook_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.notebookInput"></a>

```python
notebook_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>]

---

##### `table_local_details_input`<sup>Optional</sup> <a name="table_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tableLocalDetailsInput"></a>

```python
table_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>]

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewInput"></a>

```python
view_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>]

---

##### `view_local_details_input`<sup>Optional</sup> <a name="view_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.viewLocalDetailsInput"></a>

```python
view_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>]

---

##### `volume_local_details_input`<sup>Optional</sup> <a name="volume_local_details_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.volumeLocalDetailsInput"></a>

```python
volume_local_details_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `clean_room_name`<sup>Required</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetConfig <a name="DataDatabricksCleanRoomAssetConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  asset_type: str,
  name: str,
  clean_room_name: str = None,
  foreign_table: DataDatabricksCleanRoomAssetForeignTable = None,
  foreign_table_local_details: DataDatabricksCleanRoomAssetForeignTableLocalDetails = None,
  notebook: DataDatabricksCleanRoomAssetNotebook = None,
  table: DataDatabricksCleanRoomAssetTable = None,
  table_local_details: DataDatabricksCleanRoomAssetTableLocalDetails = None,
  view: DataDatabricksCleanRoomAssetView = None,
  view_local_details: DataDatabricksCleanRoomAssetViewLocalDetails = None,
  volume_local_details: DataDatabricksCleanRoomAssetVolumeLocalDetails = None,
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType">asset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName">clean_room_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable">foreign_table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails">foreign_table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook">notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails">table_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails">view_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails">volume_local_details</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#asset_type DataDatabricksCleanRoomAsset#asset_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `clean_room_name`<sup>Optional</sup> <a name="clean_room_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.cleanRoomName"></a>

```python
clean_room_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#clean_room_name DataDatabricksCleanRoomAsset#clean_room_name}.

---

##### `foreign_table`<sup>Optional</sup> <a name="foreign_table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTable"></a>

```python
foreign_table: DataDatabricksCleanRoomAssetForeignTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table DataDatabricksCleanRoomAsset#foreign_table}.

---

##### `foreign_table_local_details`<sup>Optional</sup> <a name="foreign_table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```python
foreign_table_local_details: DataDatabricksCleanRoomAssetForeignTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#foreign_table_local_details DataDatabricksCleanRoomAsset#foreign_table_local_details}.

---

##### `notebook`<sup>Optional</sup> <a name="notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.notebook"></a>

```python
notebook: DataDatabricksCleanRoomAssetNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook DataDatabricksCleanRoomAsset#notebook}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.table"></a>

```python
table: DataDatabricksCleanRoomAssetTable
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table DataDatabricksCleanRoomAsset#table}.

---

##### `table_local_details`<sup>Optional</sup> <a name="table_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.tableLocalDetails"></a>

```python
table_local_details: DataDatabricksCleanRoomAssetTableLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#table_local_details DataDatabricksCleanRoomAsset#table_local_details}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.view"></a>

```python
view: DataDatabricksCleanRoomAssetView
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view DataDatabricksCleanRoomAsset#view}.

---

##### `view_local_details`<sup>Optional</sup> <a name="view_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.viewLocalDetails"></a>

```python
view_local_details: DataDatabricksCleanRoomAssetViewLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#view_local_details DataDatabricksCleanRoomAsset#view_local_details}.

---

##### `volume_local_details`<sup>Optional</sup> <a name="volume_local_details" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.volumeLocalDetails"></a>

```python
volume_local_details: DataDatabricksCleanRoomAssetVolumeLocalDetails
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#volume_local_details DataDatabricksCleanRoomAsset#volume_local_details}.

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#workspace_id DataDatabricksCleanRoomAsset#workspace_id}.

---

### DataDatabricksCleanRoomAssetForeignTable <a name="DataDatabricksCleanRoomAssetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable()
```


### DataDatabricksCleanRoomAssetForeignTableColumns <a name="DataDatabricksCleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetForeignTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetForeignTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetNotebook <a name="DataDatabricksCleanRoomAssetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook(
  notebook_content: str,
  runner_collaborator_aliases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent">notebook_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}. |

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#notebook_content DataDatabricksCleanRoomAsset#notebook_content}.

---

##### `runner_collaborator_aliases`<sup>Optional</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#runner_collaborator_aliases DataDatabricksCleanRoomAsset#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetNotebookReviews <a name="DataDatabricksCleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews(
  comment: str = None,
  created_at_millis: typing.Union[int, float] = None,
  reviewer_collaborator_alias: str = None,
  review_state: str = None,
  review_sub_reason: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState">review_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `created_at_millis`<sup>Optional</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#created_at_millis DataDatabricksCleanRoomAsset#created_at_millis}.

---

##### `reviewer_collaborator_alias`<sup>Optional</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#reviewer_collaborator_alias DataDatabricksCleanRoomAsset#reviewer_collaborator_alias}.

---

##### `review_state`<sup>Optional</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_state DataDatabricksCleanRoomAsset#review_state}.

---

##### `review_sub_reason`<sup>Optional</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#review_sub_reason DataDatabricksCleanRoomAsset#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetTable <a name="DataDatabricksCleanRoomAssetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable()
```


### DataDatabricksCleanRoomAssetTableColumns <a name="DataDatabricksCleanRoomAssetTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetTableColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetTableColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetTableColumnsMask <a name="DataDatabricksCleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetTableLocalDetails <a name="DataDatabricksCleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails(
  local_name: str,
  partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions">partitions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails.property.partitions"></a>

```python
partitions: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partitions DataDatabricksCleanRoomAsset#partitions}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value">value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```python
value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue(
  name: str = None,
  op: str = None,
  recipient_property_key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op">op</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `op`<sup>Optional</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```python
op: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#op DataDatabricksCleanRoomAsset#op}.

---

##### `recipient_property_key`<sup>Optional</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#recipient_property_key DataDatabricksCleanRoomAsset#recipient_property_key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#value DataDatabricksCleanRoomAsset#value}.

---

### DataDatabricksCleanRoomAssetView <a name="DataDatabricksCleanRoomAssetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView()
```


### DataDatabricksCleanRoomAssetViewColumns <a name="DataDatabricksCleanRoomAssetViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns(
  comment: str = None,
  mask: DataDatabricksCleanRoomAssetViewColumnsMask = None,
  name: str = None,
  nullable: typing.Union[bool, IResolvable] = None,
  partition_index: typing.Union[int, float] = None,
  position: typing.Union[int, float] = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_name: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None,
  type_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#comment DataDatabricksCleanRoomAsset#comment}.

---

##### `mask`<sup>Optional</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetViewColumnsMask
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#mask DataDatabricksCleanRoomAsset#mask}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#name DataDatabricksCleanRoomAsset#name}.

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#nullable DataDatabricksCleanRoomAsset#nullable}.

---

##### `partition_index`<sup>Optional</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#partition_index DataDatabricksCleanRoomAsset#partition_index}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#position DataDatabricksCleanRoomAsset#position}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_interval_type DataDatabricksCleanRoomAsset#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_json DataDatabricksCleanRoomAsset#type_json}.

---

##### `type_name`<sup>Optional</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_name DataDatabricksCleanRoomAsset#type_name}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_precision DataDatabricksCleanRoomAsset#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_scale DataDatabricksCleanRoomAsset#type_scale}.

---

##### `type_text`<sup>Optional</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#type_text DataDatabricksCleanRoomAsset#type_text}.

---

### DataDatabricksCleanRoomAssetViewColumnsMask <a name="DataDatabricksCleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}. |

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

##### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

### DataDatabricksCleanRoomAssetViewLocalDetails <a name="DataDatabricksCleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

### DataDatabricksCleanRoomAssetVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails(
  local_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName">local_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}. |

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails.property.localName"></a>

```python
local_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#local_name DataDatabricksCleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetForeignTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>]]

---


### DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsMask">DataDatabricksCleanRoomAssetForeignTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetForeignTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumns">DataDatabricksCleanRoomAssetForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableLocalDetails">DataDatabricksCleanRoomAssetForeignTableLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetForeignTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableColumnsList">DataDatabricksCleanRoomAssetForeignTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetForeignTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetForeignTable">DataDatabricksCleanRoomAssetForeignTable</a>]

---


### DataDatabricksCleanRoomAssetNotebookOutputReference <a name="DataDatabricksCleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">reset_runner_collaborator_aliases</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_runner_collaborator_aliases` <a name="reset_runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```python
def reset_runner_collaborator_aliases() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews">reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput">notebook_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">runner_collaborator_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent">notebook_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">runner_collaborator_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `reviews`<sup>Required</sup> <a name="reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviews"></a>

```python
reviews: DataDatabricksCleanRoomAssetNotebookReviewsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList">DataDatabricksCleanRoomAssetNotebookReviewsList</a>

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `notebook_content_input`<sup>Optional</sup> <a name="notebook_content_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```python
notebook_content_input: str
```

- *Type:* str

---

##### `runner_collaborator_aliases_input`<sup>Optional</sup> <a name="runner_collaborator_aliases_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```python
runner_collaborator_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notebook_content`<sup>Required</sup> <a name="notebook_content" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```python
notebook_content: str
```

- *Type:* str

---

##### `runner_collaborator_aliases`<sup>Required</sup> <a name="runner_collaborator_aliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```python
runner_collaborator_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetNotebook]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebook">DataDatabricksCleanRoomAssetNotebook</a>]

---


### DataDatabricksCleanRoomAssetNotebookReviewsList <a name="DataDatabricksCleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetNotebookReviewsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetNotebookReviews]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>]]

---


### DataDatabricksCleanRoomAssetNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">reset_created_at_millis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">reset_reviewer_collaborator_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState">reset_review_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">reset_review_sub_reason</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at_millis` <a name="reset_created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```python
def reset_created_at_millis() -> None
```

##### `reset_reviewer_collaborator_alias` <a name="reset_reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```python
def reset_reviewer_collaborator_alias() -> None
```

##### `reset_review_state` <a name="reset_review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```python
def reset_review_state() -> None
```

##### `reset_review_sub_reason` <a name="reset_review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```python
def reset_review_sub_reason() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">created_at_millis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">reviewer_collaborator_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">review_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">review_sub_reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">created_at_millis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">reviewer_collaborator_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState">review_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">review_sub_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_millis_input`<sup>Optional</sup> <a name="created_at_millis_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```python
created_at_millis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias_input`<sup>Optional</sup> <a name="reviewer_collaborator_alias_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```python
reviewer_collaborator_alias_input: str
```

- *Type:* str

---

##### `review_state_input`<sup>Optional</sup> <a name="review_state_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```python
review_state_input: str
```

- *Type:* str

---

##### `review_sub_reason_input`<sup>Optional</sup> <a name="review_sub_reason_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```python
review_sub_reason_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at_millis`<sup>Required</sup> <a name="created_at_millis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```python
created_at_millis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reviewer_collaborator_alias`<sup>Required</sup> <a name="reviewer_collaborator_alias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```python
reviewer_collaborator_alias: str
```

- *Type:* str

---

##### `review_state`<sup>Required</sup> <a name="review_state" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```python
review_state: str
```

- *Type:* str

---

##### `review_sub_reason`<sup>Required</sup> <a name="review_sub_reason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```python
review_sub_reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetNotebookReviews
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetNotebookReviews">DataDatabricksCleanRoomAssetNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetTableColumnsList <a name="DataDatabricksCleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetTableColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>]]

---


### DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsMask">DataDatabricksCleanRoomAssetTableColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetTableColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumns">DataDatabricksCleanRoomAssetTableColumns</a>

---


### DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions">put_partitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">reset_partitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_partitions` <a name="put_partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```python
def put_partitions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]

---

##### `reset_partitions` <a name="reset_partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```python
def reset_partitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">partitions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```python
partitions: DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `partitions_input`<sup>Optional</sup> <a name="partitions_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```python
partitions_input: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetails">DataDatabricksCleanRoomAssetTableLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]]

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```python
def put_value(
  value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```python
value: DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableLocalDetailsPartitions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitions">DataDatabricksCleanRoomAssetTableLocalDetailsPartitions</a>]

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]]

---


### DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">reset_op</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">reset_recipient_property_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_op` <a name="reset_op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```python
def reset_op() -> None
```

##### `reset_recipient_property_key` <a name="reset_recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```python
def reset_recipient_property_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">op_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">recipient_property_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">op</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">recipient_property_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `op_input`<sup>Optional</sup> <a name="op_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```python
op_input: str
```

- *Type:* str

---

##### `recipient_property_key_input`<sup>Optional</sup> <a name="recipient_property_key_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```python
recipient_property_key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `op`<sup>Required</sup> <a name="op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```python
op: str
```

- *Type:* str

---

##### `recipient_property_key`<sup>Required</sup> <a name="recipient_property_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```python
recipient_property_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue">DataDatabricksCleanRoomAssetTableLocalDetailsPartitionsValue</a>]

---


### DataDatabricksCleanRoomAssetTableOutputReference <a name="DataDatabricksCleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetTableColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableColumnsList">DataDatabricksCleanRoomAssetTableColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetTable">DataDatabricksCleanRoomAssetTable</a>]

---


### DataDatabricksCleanRoomAssetViewColumnsList <a name="DataDatabricksCleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksCleanRoomAssetViewColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksCleanRoomAssetViewColumns]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>]]

---


### DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">reset_using_column_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_using_column_names` <a name="reset_using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```python
def reset_using_column_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">using_column_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">using_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `using_column_names_input`<sup>Optional</sup> <a name="using_column_names_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```python
using_column_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `using_column_names`<sup>Required</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```python
using_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>]

---


### DataDatabricksCleanRoomAssetViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask">put_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask">reset_mask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">reset_partition_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName">reset_type_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText">reset_type_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_mask` <a name="put_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask"></a>

```python
def put_mask(
  function_name: str = None,
  using_column_names: typing.List[str] = None
) -> None
```

###### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#function_name DataDatabricksCleanRoomAsset#function_name}.

---

###### `using_column_names`<sup>Optional</sup> <a name="using_column_names" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.putMask.parameter.usingColumnNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/data-sources/clean_room_asset#using_column_names DataDatabricksCleanRoomAsset#using_column_names}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_mask` <a name="reset_mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```python
def reset_mask() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_partition_index` <a name="reset_partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```python
def reset_partition_index() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_name` <a name="reset_type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```python
def reset_type_name() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```

##### `reset_type_text` <a name="reset_type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```python
def reset_type_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask">mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput">mask_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput">nullable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">partition_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable">nullable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex">partition_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```python
mask: DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `mask_input`<sup>Optional</sup> <a name="mask_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```python
mask_input: typing.Union[IResolvable, DataDatabricksCleanRoomAssetViewColumnsMask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsMask">DataDatabricksCleanRoomAssetViewColumnsMask</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```python
nullable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index_input`<sup>Optional</sup> <a name="partition_index_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```python
partition_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```python
nullable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `partition_index`<sup>Required</sup> <a name="partition_index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```python
partition_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCleanRoomAssetViewColumns
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumns">DataDatabricksCleanRoomAssetViewColumns</a>

---


### DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetViewLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewLocalDetails">DataDatabricksCleanRoomAssetViewLocalDetails</a>]

---


### DataDatabricksCleanRoomAssetViewOutputReference <a name="DataDatabricksCleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.columns"></a>

```python
columns: DataDatabricksCleanRoomAssetViewColumnsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewColumnsList">DataDatabricksCleanRoomAssetViewColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetViewOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetView]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetView">DataDatabricksCleanRoomAssetView</a>]

---


### DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clean_room_asset

dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">local_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">local_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `local_name_input`<sup>Optional</sup> <a name="local_name_input" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```python
local_name_input: str
```

- *Type:* str

---

##### `local_name`<sup>Required</sup> <a name="local_name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```python
local_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksCleanRoomAssetVolumeLocalDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAsset.DataDatabricksCleanRoomAssetVolumeLocalDetails">DataDatabricksCleanRoomAssetVolumeLocalDetails</a>]

---



