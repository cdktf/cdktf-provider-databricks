# `dataDatabricksMaterializedFeaturesFeatureTags` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTags` Submodule" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTags" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags databricks_materialized_features_feature_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str,
  table_name: str,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.featureName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTags to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMaterializedFeaturesFeatureTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags">feature_tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `feature_tags`<sup>Required</sup> <a name="feature_tags" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureTags"></a>

```python
feature_tags: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList</a>

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagsConfig" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str,
  table_name: str,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#feature_name DataDatabricksMaterializedFeaturesFeatureTags#feature_name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#table_name DataDatabricksMaterializedFeaturesFeatureTags#table_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#page_size DataDatabricksMaterializedFeaturesFeatureTags#page_size}.

---

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags(
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/materialized_features_feature_tags#key DataDatabricksMaterializedFeaturesFeatureTags#key}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>]

---


### DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference <a name="DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_materialized_features_feature_tags

dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTags.DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags">DataDatabricksMaterializedFeaturesFeatureTagsFeatureTags</a>

---



