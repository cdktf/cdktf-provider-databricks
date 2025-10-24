# `materializedFeaturesFeatureTag` Submodule <a name="`materializedFeaturesFeatureTag` Submodule" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaterializedFeaturesFeatureTag <a name="MaterializedFeaturesFeatureTag" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.Initializer.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue">reset_value</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.resetValue"></a>

```python
def reset_value() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MaterializedFeaturesFeatureTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value">value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.value"></a>

```python
value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaterializedFeaturesFeatureTagConfig <a name="MaterializedFeaturesFeatureTagConfig" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import materialized_features_feature_tag

materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#key MaterializedFeaturesFeatureTag#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.materializedFeaturesFeatureTag.MaterializedFeaturesFeatureTagConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/materialized_features_feature_tag#value MaterializedFeaturesFeatureTag#value}.

---



