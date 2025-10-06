# `catalog` Submodule <a name="`catalog` Submodule" id="@cdktf/provider-databricks.catalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Catalog <a name="Catalog" id="@cdktf/provider-databricks.catalog.Catalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.Catalog.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.Catalog(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  browse_only: bool | IResolvable = None,
  comment: str = None,
  connection_name: str = None,
  effective_predictive_optimization_flag: CatalogEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  options: typing.Mapping[str] = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  provider_name: str = None,
  provisioning_info: CatalogProvisioningInfo = None,
  share_name: str = None,
  storage_location: str = None,
  storage_root: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.browseOnly">browse_only</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provisioningInfo">provisioning_info</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_location Catalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.browseOnly"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.connectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.effectivePredictiveOptimizationFlag"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.enablePredictiveOptimization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#name Catalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#options Catalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `provisioning_info`<sup>Optional</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.provisioningInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.shareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.storageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_location Catalog#storage_location}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.catalog.Catalog.Initializer.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag">put_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo">put_provisioning_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag">reset_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization">reset_enable_predictive_optimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetProvisioningInfo">reset_provisioning_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.resetStorageRoot">reset_storage_root</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.catalog.Catalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.catalog.Catalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.catalog.Catalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.Catalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.catalog.Catalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.catalog.Catalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.catalog.Catalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.catalog.Catalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.catalog.Catalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.catalog.Catalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.catalog.Catalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.catalog.Catalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.catalog.Catalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.Catalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.catalog.Catalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.catalog.Catalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.catalog.Catalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.catalog.Catalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.catalog.Catalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_effective_predictive_optimization_flag` <a name="put_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag"></a>

```python
def put_effective_predictive_optimization_flag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#value Catalog#value}.

---

###### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}.

---

###### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.catalog.Catalog.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}.

---

##### `put_provisioning_info` <a name="put_provisioning_info" id="@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo"></a>

```python
def put_provisioning_info(
  state: str = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.catalog.Catalog.putProvisioningInfo.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#state Catalog#state}.

---

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.catalog.Catalog.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.catalog.Catalog.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-databricks.catalog.Catalog.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_effective_predictive_optimization_flag` <a name="reset_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.catalog.Catalog.resetEffectivePredictiveOptimizationFlag"></a>

```python
def reset_effective_predictive_optimization_flag() -> None
```

##### `reset_enable_predictive_optimization` <a name="reset_enable_predictive_optimization" id="@cdktf/provider-databricks.catalog.Catalog.resetEnablePredictiveOptimization"></a>

```python
def reset_enable_predictive_optimization() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-databricks.catalog.Catalog.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.catalog.Catalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.catalog.Catalog.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.catalog.Catalog.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.catalog.Catalog.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-databricks.catalog.Catalog.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.catalog.Catalog.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-databricks.catalog.Catalog.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktf/provider-databricks.catalog.Catalog.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_provisioning_info` <a name="reset_provisioning_info" id="@cdktf/provider-databricks.catalog.Catalog.resetProvisioningInfo"></a>

```python
def reset_provisioning_info() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-databricks.catalog.Catalog.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.catalog.Catalog.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktf/provider-databricks.catalog.Catalog.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Catalog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.catalog.Catalog.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.Catalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.Catalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.Catalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalog.Catalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.Catalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Catalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Catalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Catalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Catalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfo">provisioning_info</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.browseOnlyInput">browse_only_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput">effective_predictive_optimization_flag_input</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput">enable_predictive_optimization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfoInput">provisioning_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.browseOnly">browse_only</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.catalog.Catalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.catalog.Catalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.Catalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.catalog.Catalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.catalog.Catalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalog.Catalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalog.Catalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalog.Catalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalog.Catalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalog.Catalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.Catalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktf/provider-databricks.catalog.Catalog.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.catalog.Catalog.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.catalog.Catalog.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag`<sup>Required</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: CatalogEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference">CatalogEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.catalog.Catalog.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `provisioning_info`<sup>Required</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfo"></a>

```python
provisioning_info: CatalogProvisioningInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference">CatalogProvisioningInfoOutputReference</a>

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktf/provider-databricks.catalog.Catalog.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.catalog.Catalog.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.catalog.Catalog.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.catalog.Catalog.property.browseOnlyInput"></a>

```python
browse_only_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.catalog.Catalog.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-databricks.catalog.Catalog.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag_input`<sup>Optional</sup> <a name="effective_predictive_optimization_flag_input" id="@cdktf/provider-databricks.catalog.Catalog.property.effectivePredictiveOptimizationFlagInput"></a>

```python
effective_predictive_optimization_flag_input: CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---

##### `enable_predictive_optimization_input`<sup>Optional</sup> <a name="enable_predictive_optimization_input" id="@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimizationInput"></a>

```python
enable_predictive_optimization_input: str
```

- *Type:* str

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-databricks.catalog.Catalog.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.catalog.Catalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.catalog.Catalog.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.catalog.Catalog.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.catalog.Catalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-databricks.catalog.Catalog.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.catalog.Catalog.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-databricks.catalog.Catalog.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-databricks.catalog.Catalog.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `provisioning_info_input`<sup>Optional</sup> <a name="provisioning_info_input" id="@cdktf/provider-databricks.catalog.Catalog.property.provisioningInfoInput"></a>

```python
provisioning_info_input: CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-databricks.catalog.Catalog.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.catalog.Catalog.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktf/provider-databricks.catalog.Catalog.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.catalog.Catalog.property.browseOnly"></a>

```python
browse_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.catalog.Catalog.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-databricks.catalog.Catalog.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `enable_predictive_optimization`<sup>Required</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.catalog.Catalog.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-databricks.catalog.Catalog.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalog.Catalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.catalog.Catalog.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.catalog.Catalog.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.catalog.Catalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.catalog.Catalog.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.catalog.Catalog.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.catalog.Catalog.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-databricks.catalog.Catalog.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-databricks.catalog.Catalog.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.catalog.Catalog.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktf/provider-databricks.catalog.Catalog.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.Catalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.catalog.Catalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogConfig <a name="CatalogConfig" id="@cdktf/provider-databricks.catalog.CatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.CatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  browse_only: bool | IResolvable = None,
  comment: str = None,
  connection_name: str = None,
  effective_predictive_optimization_flag: CatalogEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  options: typing.Mapping[str] = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  provider_name: str = None,
  provisioning_info: CatalogProvisioningInfo = None,
  share_name: str = None,
  storage_location: str = None,
  storage_root: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.browseOnly">browse_only</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#browse_only Catalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#comment Catalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#connection_name Catalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#force_destroy Catalog#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#id Catalog#id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#metastore_id Catalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#name Catalog#name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#options Catalog#options}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#owner Catalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#properties Catalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provider_name Catalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioningInfo">provisioning_info</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#share_name Catalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_location Catalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogConfig.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_root Catalog#storage_root}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.browseOnly"></a>

```python
browse_only: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#browse_only Catalog#browse_only}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#comment Catalog#comment}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#connection_name Catalog#connection_name}.

---

##### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#effective_predictive_optimization_flag Catalog#effective_predictive_optimization_flag}

---

##### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#enable_predictive_optimization Catalog#enable_predictive_optimization}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#force_destroy Catalog#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#id Catalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#isolation_mode Catalog#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#metastore_id Catalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#name Catalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#options Catalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#owner Catalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#properties Catalog#properties}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provider_name Catalog#provider_name}.

---

##### `provisioning_info`<sup>Optional</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.provisioningInfo"></a>

```python
provisioning_info: CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#provisioning_info Catalog#provisioning_info}

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#share_name Catalog#share_name}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_location Catalog#storage_location}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.catalog.CatalogConfig.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#storage_root Catalog#storage_root}.

---

### CatalogEffectivePredictiveOptimizationFlag <a name="CatalogEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.CatalogEffectivePredictiveOptimizationFlag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#value Catalog#value}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#value Catalog#value}.

---

##### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_name Catalog#inherited_from_name}.

---

##### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#inherited_from_type Catalog#inherited_from_type}.

---

### CatalogProvisioningInfo <a name="CatalogProvisioningInfo" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.CatalogProvisioningInfo(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#state Catalog#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfo.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/catalog#state Catalog#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CatalogEffectivePredictiveOptimizationFlagOutputReference <a name="CatalogEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">reset_inherited_from_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">reset_inherited_from_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inherited_from_name` <a name="reset_inherited_from_name" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```python
def reset_inherited_from_name() -> None
```

##### `reset_inherited_from_type` <a name="reset_inherited_from_type" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```python
def reset_inherited_from_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inherited_from_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inherited_from_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inherited_from_name_input`<sup>Optional</sup> <a name="inherited_from_name_input" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```python
inherited_from_name_input: str
```

- *Type:* str

---

##### `inherited_from_type_input`<sup>Optional</sup> <a name="inherited_from_type_input" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```python
inherited_from_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `inherited_from_name`<sup>Required</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

---

##### `inherited_from_type`<sup>Required</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```python
internal_value: CatalogEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogEffectivePredictiveOptimizationFlag">CatalogEffectivePredictiveOptimizationFlag</a>

---


### CatalogProvisioningInfoOutputReference <a name="CatalogProvisioningInfoOutputReference" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog

catalog.CatalogProvisioningInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.catalog.CatalogProvisioningInfoOutputReference.property.internalValue"></a>

```python
internal_value: CatalogProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.catalog.CatalogProvisioningInfo">CatalogProvisioningInfo</a>

---



