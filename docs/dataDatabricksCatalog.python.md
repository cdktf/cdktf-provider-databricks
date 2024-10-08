# `dataDatabricksCatalog` Submodule <a name="`dataDatabricksCatalog` Submodule" id="@cdktf/provider-databricks.dataDatabricksCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCatalog <a name="DataDatabricksCatalog" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog databricks_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalog(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  catalog_info: DataDatabricksCatalogCatalogInfo = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `catalog_info`<sup>Optional</sup> <a name="catalog_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.catalogInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo">put_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo">reset_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_catalog_info` <a name="put_catalog_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo"></a>

```python
def put_catalog_info(
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_type: str = None,
  comment: str = None,
  connection_name: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  effective_predictive_optimization_flag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  full_name: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  options: typing.Mapping[str] = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  provider_name: str = None,
  provisioning_info: DataDatabricksCatalogCatalogInfoProvisioningInfo = None,
  securable_kind: str = None,
  securable_type: str = None,
  share_name: str = None,
  storage_location: str = None,
  storage_root: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
) -> None
```

###### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.browseOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}.

---

###### `catalog_type`<sup>Optional</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.catalogType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}.

---

###### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.connectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}.

---

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}.

---

###### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}.

---

###### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.effectivePredictiveOptimizationFlag"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}

---

###### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.enablePredictiveOptimization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}.

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}.

---

###### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}.

---

###### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}.

---

###### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}.

---

###### `provisioning_info`<sup>Optional</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.provisioningInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}

---

###### `securable_kind`<sup>Optional</sup> <a name="securable_kind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.securableKind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_kind DataDatabricksCatalog#securable_kind}.

---

###### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}.

---

###### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.shareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}.

---

###### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.storageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}.

---

###### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}.

---

###### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}.

---

###### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.putCatalogInfo.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}.

---

##### `reset_catalog_info` <a name="reset_catalog_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetCatalogInfo"></a>

```python
def reset_catalog_info() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalog.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalog.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksCatalog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput">catalog_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `catalog_info`<sup>Required</sup> <a name="catalog_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfo"></a>

```python
catalog_info: DataDatabricksCatalogCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference">DataDatabricksCatalogCatalogInfoOutputReference</a>

---

##### `catalog_info_input`<sup>Optional</sup> <a name="catalog_info_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.catalogInfoInput"></a>

```python
catalog_info_input: DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCatalogCatalogInfo <a name="DataDatabricksCatalogCatalogInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo(
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_type: str = None,
  comment: str = None,
  connection_name: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  effective_predictive_optimization_flag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  full_name: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  options: typing.Mapping[str] = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  provider_name: str = None,
  provisioning_info: DataDatabricksCatalogCatalogInfoProvisioningInfo = None,
  securable_kind: str = None,
  securable_type: str = None,
  share_name: str = None,
  storage_location: str = None,
  storage_root: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType">catalog_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo">provisioning_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | provisioning_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableKind">securable_kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_kind DataDatabricksCatalog#securable_kind}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}. |

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#browse_only DataDatabricksCatalog#browse_only}.

---

##### `catalog_type`<sup>Optional</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#catalog_type DataDatabricksCatalog#catalog_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#comment DataDatabricksCatalog#comment}.

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#connection_name DataDatabricksCatalog#connection_name}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_at DataDatabricksCatalog#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#created_by DataDatabricksCatalog#created_by}.

---

##### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#effective_predictive_optimization_flag DataDatabricksCatalog#effective_predictive_optimization_flag}

---

##### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#enable_predictive_optimization DataDatabricksCatalog#enable_predictive_optimization}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#full_name DataDatabricksCatalog#full_name}.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#isolation_mode DataDatabricksCatalog#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#metastore_id DataDatabricksCatalog#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#options DataDatabricksCatalog#options}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#owner DataDatabricksCatalog#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#properties DataDatabricksCatalog#properties}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#provider_name DataDatabricksCatalog#provider_name}.

---

##### `provisioning_info`<sup>Optional</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.provisioningInfo"></a>

```python
provisioning_info: DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

provisioning_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#provisioning_info DataDatabricksCatalog#provisioning_info}

---

##### `securable_kind`<sup>Optional</sup> <a name="securable_kind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_kind DataDatabricksCatalog#securable_kind}.

---

##### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#securable_type DataDatabricksCatalog#securable_type}.

---

##### `share_name`<sup>Optional</sup> <a name="share_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#share_name DataDatabricksCatalog#share_name}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_location DataDatabricksCatalog#storage_location}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#storage_root DataDatabricksCatalog#storage_root}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_at DataDatabricksCatalog#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#updated_by DataDatabricksCatalog#updated_by}.

---

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}.

---

##### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}.

---

##### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}.

---

### DataDatabricksCatalogCatalogInfoProvisioningInfo <a name="DataDatabricksCatalogCatalogInfoProvisioningInfo" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo(
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}.

---

### DataDatabricksCatalogConfig <a name="DataDatabricksCatalogConfig" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  catalog_info: DataDatabricksCatalogCatalogInfo = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo">catalog_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | catalog_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#name DataDatabricksCatalog#name}.

---

##### `catalog_info`<sup>Optional</sup> <a name="catalog_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.catalogInfo"></a>

```python
catalog_info: DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#catalog_info DataDatabricksCatalog#catalog_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#id DataDatabricksCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">reset_inherited_from_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">reset_inherited_from_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inherited_from_name` <a name="reset_inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```python
def reset_inherited_from_name() -> None
```

##### `reset_inherited_from_type` <a name="reset_inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```python
def reset_inherited_from_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inherited_from_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inherited_from_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inherited_from_name_input`<sup>Optional</sup> <a name="inherited_from_name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```python
inherited_from_name_input: str
```

- *Type:* str

---

##### `inherited_from_type_input`<sup>Optional</sup> <a name="inherited_from_type_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```python
inherited_from_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `inherited_from_name`<sup>Required</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

---

##### `inherited_from_type`<sup>Required</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksCatalogCatalogInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag">put_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo">put_provisioning_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType">reset_catalog_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag">reset_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization">reset_enable_predictive_optimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo">reset_provisioning_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableKind">reset_securable_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType">reset_securable_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName">reset_share_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot">reset_storage_root</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_effective_predictive_optimization_flag` <a name="put_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```python
def put_effective_predictive_optimization_flag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#value DataDatabricksCatalog#value}.

---

###### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_name DataDatabricksCatalog#inherited_from_name}.

---

###### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#inherited_from_type DataDatabricksCatalog#inherited_from_type}.

---

##### `put_provisioning_info` <a name="put_provisioning_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo"></a>

```python
def put_provisioning_info(
  state: str = None
) -> None
```

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.putProvisioningInfo.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/data-sources/catalog#state DataDatabricksCatalog#state}.

---

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_type` <a name="reset_catalog_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCatalogType"></a>

```python
def reset_catalog_type() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_effective_predictive_optimization_flag` <a name="reset_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```python
def reset_effective_predictive_optimization_flag() -> None
```

##### `reset_enable_predictive_optimization` <a name="reset_enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetEnablePredictiveOptimization"></a>

```python
def reset_enable_predictive_optimization() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_provisioning_info` <a name="reset_provisioning_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetProvisioningInfo"></a>

```python
def reset_provisioning_info() -> None
```

##### `reset_securable_kind` <a name="reset_securable_kind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableKind"></a>

```python
def reset_securable_kind() -> None
```

##### `reset_securable_type` <a name="reset_securable_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetSecurableType"></a>

```python
def reset_securable_type() -> None
```

##### `reset_share_name` <a name="reset_share_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetShareName"></a>

```python
def reset_share_name() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo">provisioning_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput">catalog_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effective_predictive_optimization_flag_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput">enable_predictive_optimization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput">provisioning_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKindInput">securable_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKind">securable_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag`<sup>Required</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `provisioning_info`<sup>Required</sup> <a name="provisioning_info" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfo"></a>

```python
provisioning_info: DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference">DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference</a>

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_type_input`<sup>Optional</sup> <a name="catalog_type_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogTypeInput"></a>

```python
catalog_type_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag_input`<sup>Optional</sup> <a name="effective_predictive_optimization_flag_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```python
effective_predictive_optimization_flag_input: DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag">DataDatabricksCatalogCatalogInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enable_predictive_optimization_input`<sup>Optional</sup> <a name="enable_predictive_optimization_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```python
enable_predictive_optimization_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `provisioning_info_input`<sup>Optional</sup> <a name="provisioning_info_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.provisioningInfoInput"></a>

```python
provisioning_info_input: DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---

##### `securable_kind_input`<sup>Optional</sup> <a name="securable_kind_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKindInput"></a>

```python
securable_kind_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `enable_predictive_optimization`<sup>Required</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `securable_kind`<sup>Required</sup> <a name="securable_kind" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableKind"></a>

```python
securable_kind: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCatalogCatalogInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfo">DataDatabricksCatalogCatalogInfo</a>

---


### DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference <a name="DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_catalog

dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_state` <a name="reset_state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCatalogCatalogInfoProvisioningInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCatalog.DataDatabricksCatalogCatalogInfoProvisioningInfo">DataDatabricksCatalogCatalogInfoProvisioningInfo</a>

---



