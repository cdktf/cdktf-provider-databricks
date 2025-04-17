# `dataDatabricksSchema` Submodule <a name="`dataDatabricksSchema` Submodule" id="@cdktf/provider-databricks.dataDatabricksSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSchema <a name="DataDatabricksSchema" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema databricks_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchema(
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
  id: str = None,
  schema_info: DataDatabricksSchemaSchemaInfo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#id DataDatabricksSchema#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.schemaInfo">schema_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | schema_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#id DataDatabricksSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_info`<sup>Optional</sup> <a name="schema_info" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.schemaInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

schema_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo">put_schema_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo">reset_schema_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_schema_info` <a name="put_schema_info" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo"></a>

```python
def put_schema_info(
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  catalog_type: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  effective_predictive_optimization_flag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  full_name: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  schema_id: str = None,
  storage_location: str = None,
  storage_root: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
) -> None
```

###### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.browseOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}.

---

###### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}.

---

###### `catalog_type`<sup>Optional</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.catalogType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}.

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}.

---

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}.

---

###### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}.

---

###### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.effectivePredictiveOptimizationFlag"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}

---

###### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.enablePredictiveOptimization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}.

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}.

---

###### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}.

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.properties"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}.

---

###### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.schemaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}.

---

###### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.storageLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}.

---

###### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}.

---

###### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}.

---

###### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schema_info` <a name="reset_schema_info" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo"></a>

```python
def reset_schema_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchema.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchema.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchema.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchema.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksSchema to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo">schema_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput">schema_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `schema_info`<sup>Required</sup> <a name="schema_info" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo"></a>

```python
schema_info: DataDatabricksSchemaSchemaInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_info_input`<sup>Optional</sup> <a name="schema_info_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput"></a>

```python
schema_info_input: DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSchemaConfig <a name="DataDatabricksSchemaConfig" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchemaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  schema_info: DataDatabricksSchemaSchemaInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#id DataDatabricksSchema#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo">schema_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | schema_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#id DataDatabricksSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schema_info`<sup>Optional</sup> <a name="schema_info" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo"></a>

```python
schema_info: DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

schema_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}

---

### DataDatabricksSchemaSchemaInfo <a name="DataDatabricksSchemaSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchemaSchemaInfo(
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  catalog_type: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  effective_predictive_optimization_flag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag = None,
  enable_predictive_optimization: str = None,
  full_name: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  properties: typing.Mapping[str] = None,
  schema_id: str = None,
  storage_location: str = None,
  storage_root: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType">catalog_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId">schema_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation">storage_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}. |

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}.

---

##### `catalog_type`<sup>Optional</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}.

---

##### `effective_predictive_optimization_flag`<sup>Optional</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}

---

##### `enable_predictive_optimization`<sup>Optional</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}.

---

##### `schema_id`<sup>Optional</sup> <a name="schema_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}.

---

##### `storage_location`<sup>Optional</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}.

---

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#value DataDatabricksSchema#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#value DataDatabricksSchema#value}.

---

##### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}.

---

##### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">reset_inherited_from_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">reset_inherited_from_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_inherited_from_name` <a name="reset_inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```python
def reset_inherited_from_name() -> None
```

##### `reset_inherited_from_type` <a name="reset_inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```python
def reset_inherited_from_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">inherited_from_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">inherited_from_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">inherited_from_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">inherited_from_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inherited_from_name_input`<sup>Optional</sup> <a name="inherited_from_name_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```python
inherited_from_name_input: str
```

- *Type:* str

---

##### `inherited_from_type_input`<sup>Optional</sup> <a name="inherited_from_type_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```python
inherited_from_type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `inherited_from_name`<sup>Required</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```python
inherited_from_name: str
```

- *Type:* str

---

##### `inherited_from_type`<sup>Required</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```python
inherited_from_type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksSchemaSchemaInfoOutputReference <a name="DataDatabricksSchemaSchemaInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_schema

dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag">put_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType">reset_catalog_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag">reset_effective_predictive_optimization_flag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization">reset_enable_predictive_optimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId">reset_schema_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation">reset_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot">reset_storage_root</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_effective_predictive_optimization_flag` <a name="put_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```python
def put_effective_predictive_optimization_flag(
  value: str,
  inherited_from_name: str = None,
  inherited_from_type: str = None
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#value DataDatabricksSchema#value}.

---

###### `inherited_from_name`<sup>Optional</sup> <a name="inherited_from_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}.

---

###### `inherited_from_type`<sup>Optional</sup> <a name="inherited_from_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.inheritedFromType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}.

---

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_catalog_type` <a name="reset_catalog_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType"></a>

```python
def reset_catalog_type() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_effective_predictive_optimization_flag` <a name="reset_effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```python
def reset_effective_predictive_optimization_flag() -> None
```

##### `reset_enable_predictive_optimization` <a name="reset_enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization"></a>

```python
def reset_enable_predictive_optimization() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_schema_id` <a name="reset_schema_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId"></a>

```python
def reset_schema_id() -> None
```

##### `reset_storage_location` <a name="reset_storage_location" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation"></a>

```python
def reset_storage_location() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag">effective_predictive_optimization_flag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput">catalog_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">effective_predictive_optimization_flag_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput">enable_predictive_optimization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput">storage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization">enable_predictive_optimization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation">storage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag`<sup>Required</sup> <a name="effective_predictive_optimization_flag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```python
effective_predictive_optimization_flag: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `catalog_type_input`<sup>Optional</sup> <a name="catalog_type_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput"></a>

```python
catalog_type_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `effective_predictive_optimization_flag_input`<sup>Optional</sup> <a name="effective_predictive_optimization_flag_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```python
effective_predictive_optimization_flag_input: DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `enable_predictive_optimization_input`<sup>Optional</sup> <a name="enable_predictive_optimization_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```python
enable_predictive_optimization_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput"></a>

```python
storage_location_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `enable_predictive_optimization`<sup>Required</sup> <a name="enable_predictive_optimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization"></a>

```python
enable_predictive_optimization: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation"></a>

```python
storage_location: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksSchemaSchemaInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---



