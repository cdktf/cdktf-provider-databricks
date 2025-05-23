# `catalogWorkspaceBinding` Submodule <a name="`catalogWorkspaceBinding` Submodule" id="@cdktf/provider-databricks.catalogWorkspaceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CatalogWorkspaceBinding <a name="CatalogWorkspaceBinding" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding databricks_catalog_workspace_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: typing.Union[int, float],
  binding_type: str = None,
  catalog_name: str = None,
  id: str = None,
  securable_name: str = None,
  securable_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableName">securable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.workspaceId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.bindingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securable_name`<sup>Optional</sup> <a name="securable_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.Initializer.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType">reset_binding_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName">reset_securable_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType">reset_securable_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_binding_type` <a name="reset_binding_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetBindingType"></a>

```python
def reset_binding_type() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_securable_name` <a name="reset_securable_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableName"></a>

```python
def reset_securable_name() -> None
```

##### `reset_securable_type` <a name="reset_securable_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.resetSecurableType"></a>

```python
def reset_securable_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CatalogWorkspaceBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CatalogWorkspaceBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CatalogWorkspaceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CatalogWorkspaceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput">binding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput">securable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput">workspace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType">binding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName">securable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binding_type_input`<sup>Optional</sup> <a name="binding_type_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingTypeInput"></a>

```python
binding_type_input: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `securable_name_input`<sup>Optional</sup> <a name="securable_name_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableNameInput"></a>

```python
securable_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceIdInput"></a>

```python
workspace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binding_type`<sup>Required</sup> <a name="binding_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `securable_name`<sup>Required</sup> <a name="securable_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableName"></a>

```python
securable_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CatalogWorkspaceBindingConfig <a name="CatalogWorkspaceBindingConfig" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import catalog_workspace_binding

catalogWorkspaceBinding.CatalogWorkspaceBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: typing.Union[int, float],
  binding_type: str = None,
  catalog_name: str = None,
  id: str = None,
  securable_name: str = None,
  securable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName">securable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}. |
| <code><a href="#@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#workspace_id CatalogWorkspaceBinding#workspace_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#binding_type CatalogWorkspaceBinding#binding_type}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#catalog_name CatalogWorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#id CatalogWorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securable_name`<sup>Optional</sup> <a name="securable_name" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableName"></a>

```python
securable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_name CatalogWorkspaceBinding#securable_name}.

---

##### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktf/provider-databricks.catalogWorkspaceBinding.CatalogWorkspaceBindingConfig.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/resources/catalog_workspace_binding#securable_type CatalogWorkspaceBinding#securable_type}.

---



