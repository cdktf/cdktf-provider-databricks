# `dataDatabricksClusters` Submodule <a name="`dataDatabricksClusters` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusters <a name="DataDatabricksClusters" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters databricks_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClusters(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name_contains: str = None,
  filter_by: DataDatabricksClustersFilterBy = None,
  id: str = None,
  ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.clusterNameContains">cluster_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.filterBy">filter_by</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | filter_by block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#id DataDatabricksClusters#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name_contains`<sup>Optional</sup> <a name="cluster_name_contains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.clusterNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}.

---

##### `filter_by`<sup>Optional</sup> <a name="filter_by" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.filterBy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

filter_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#filter_by DataDatabricksClusters#filter_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#id DataDatabricksClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy">put_filter_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains">reset_cluster_name_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy">reset_filter_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds">reset_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter_by` <a name="put_filter_by" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy"></a>

```python
def put_filter_by(
  cluster_sources: typing.List[str] = None,
  cluster_states: typing.List[str] = None,
  is_pinned: typing.Union[bool, IResolvable] = None,
  policy_id: str = None
) -> None
```

###### `cluster_sources`<sup>Optional</sup> <a name="cluster_sources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.clusterSources"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}.

---

###### `cluster_states`<sup>Optional</sup> <a name="cluster_states" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.clusterStates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}.

---

###### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.isPinned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}.

---

###### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}.

---

##### `reset_cluster_name_contains` <a name="reset_cluster_name_contains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains"></a>

```python
def reset_cluster_name_contains() -> None
```

##### `reset_filter_by` <a name="reset_filter_by" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy"></a>

```python
def reset_filter_by() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ids` <a name="reset_ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds"></a>

```python
def reset_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClusters.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy">filter_by</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput">cluster_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput">filter_by_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains">cluster_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter_by`<sup>Required</sup> <a name="filter_by" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy"></a>

```python
filter_by: DataDatabricksClustersFilterByOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a>

---

##### `cluster_name_contains_input`<sup>Optional</sup> <a name="cluster_name_contains_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput"></a>

```python
cluster_name_contains_input: str
```

- *Type:* str

---

##### `filter_by_input`<sup>Optional</sup> <a name="filter_by_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput"></a>

```python
filter_by_input: DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_name_contains`<sup>Required</sup> <a name="cluster_name_contains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains"></a>

```python
cluster_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClustersConfig <a name="DataDatabricksClustersConfig" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name_contains: str = None,
  filter_by: DataDatabricksClustersFilterBy = None,
  id: str = None,
  ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains">cluster_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy">filter_by</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | filter_by block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#id DataDatabricksClusters#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name_contains`<sup>Optional</sup> <a name="cluster_name_contains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains"></a>

```python
cluster_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}.

---

##### `filter_by`<sup>Optional</sup> <a name="filter_by" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy"></a>

```python
filter_by: DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

filter_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#filter_by DataDatabricksClusters#filter_by}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#id DataDatabricksClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}.

---

### DataDatabricksClustersFilterBy <a name="DataDatabricksClustersFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClustersFilterBy(
  cluster_sources: typing.List[str] = None,
  cluster_states: typing.List[str] = None,
  is_pinned: typing.Union[bool, IResolvable] = None,
  policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources">cluster_sources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates">cluster_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned">is_pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}. |

---

##### `cluster_sources`<sup>Optional</sup> <a name="cluster_sources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources"></a>

```python
cluster_sources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}.

---

##### `cluster_states`<sup>Optional</sup> <a name="cluster_states" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates"></a>

```python
cluster_states: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}.

---

##### `is_pinned`<sup>Optional</sup> <a name="is_pinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned"></a>

```python
is_pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksClustersFilterByOutputReference <a name="DataDatabricksClustersFilterByOutputReference" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_clusters

dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources">reset_cluster_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates">reset_cluster_states</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned">reset_is_pinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_sources` <a name="reset_cluster_sources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources"></a>

```python
def reset_cluster_sources() -> None
```

##### `reset_cluster_states` <a name="reset_cluster_states" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates"></a>

```python
def reset_cluster_states() -> None
```

##### `reset_is_pinned` <a name="reset_is_pinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned"></a>

```python
def reset_is_pinned() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput">cluster_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput">cluster_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput">is_pinned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources">cluster_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates">cluster_states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned">is_pinned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_sources_input`<sup>Optional</sup> <a name="cluster_sources_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput"></a>

```python
cluster_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_states_input`<sup>Optional</sup> <a name="cluster_states_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput"></a>

```python
cluster_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_pinned_input`<sup>Optional</sup> <a name="is_pinned_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput"></a>

```python
is_pinned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `cluster_sources`<sup>Required</sup> <a name="cluster_sources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources"></a>

```python
cluster_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_states`<sup>Required</sup> <a name="cluster_states" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates"></a>

```python
cluster_states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_pinned`<sup>Required</sup> <a name="is_pinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned"></a>

```python
is_pinned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---



